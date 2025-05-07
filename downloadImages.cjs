const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const publicDir = path.join(__dirname, 'public', 'integrantes');

async function getInstrutores() {
  const link =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vROsUV2SU4TSAu-VnEet3YFjAuHz1ZnM-09euJYTjQjBcDaQ4Vw0uRZf1lH1ASYJis-vviSdzJ0aOPy/pub?gid=1427899878&single=true&output=csv';

  const res = await fetch(link);
  const text = await res.text();

  const blocks = text.split(/(?=\d{2}\/\d{2}\/\d{4})/g).slice(1);

  const instrutores = blocks.map((block, index) => {
    const [data, name, expertise, bio, email, github, instagram, linkedin, image] = block.trim().split(',');

    return {
      id: (index + 1).toString(),
      data,
      name,
      bio,
      expertise,
      image,
      social: {
        github,
        linkedin,
        twitter: instagram,
      },
    };
  });

  // Garante que o diretório existe
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const instrutor of instrutores) {
    if (instrutor.image) {
      const imageId = extractImageId(instrutor.image);
      const imagePath = path.join(publicDir, `${imageId}.jpg`);

      if (!fs.existsSync(imagePath)) {
        await saveImage(instrutor.image, imagePath);
      }
    }
  }

  return instrutores;
}

function extractImageId(imageUrl) {
  const match = imageUrl.match(/id=([a-zA-Z0-9_-]+)/);
  if (match) return match[1];

  const lastPart = imageUrl.split('/').pop().split('?')[0];
  return lastPart.split('.')[0];
}

async function saveImage(imageUrl, filePath) {
  const imageId = extractImageId(imageUrl);
  const driveUrl = `https://drive.google.com/uc?export=download&id=${imageId}`;

  const res = await fetch(driveUrl);

  if (!res.ok) {
    console.log(`Erro ao baixar a imagem: ${res.statusText}`);
    return;
  }

  const buffer = await res.buffer();
  fs.writeFileSync(filePath, buffer);
  console.log(`Imagem salva em: ${filePath}`);
}

getInstrutores();
