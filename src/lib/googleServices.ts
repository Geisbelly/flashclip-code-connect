
const sheetId = '2PACX-1vQ3nvgTvC4ULYQsB6renOL34P_83EgECG6DwQjVRAnmRF7UUoCHyTseyFz7GZ2RMz4L80ky3cgvrzz3'; // ID da publicação, não o da planilha original
const gid = '179122432';

// URL de planilha publicada em formato CSV (mais fácil de parsear)
  const url = `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?gid=${gid}&single=true&output=csv`;

  export default async function fetchSheetCSV() {
    const res = await fetch(url);
    const text = await res.text();
  
    // Parse simples CSV → Array de arrays
    const rows = text.trim().split('\n').map(row => row.split(','));
    return rows;
  }


  

  function getId(link: string): string {
    const patterns = [
      /\/d\/([a-zA-Z0-9_-]{10,})/,         // /d/ID/
      /id=([a-zA-Z0-9_-]{10,})/,           // id=ID
      /\/file\/d\/([a-zA-Z0-9_-]{10,})/,   // /file/d/ID
      /\/uc\?export=view&id=([a-zA-Z0-9_-]{10,})/ // uc?export=view&id=ID
    ];
  
    for (const pattern of patterns) {
      const match = link.match(pattern);
      if (match && match[1]) return match[1];
    }
  
    return link.trim(); // fallback bruto, se não for link do Drive, retorna o original mesmo
  }
  
  

  export async function getInstrutores() {
    const link =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vROsUV2SU4TSAu-VnEet3YFjAuHz1ZnM-09euJYTjQjBcDaQ4Vw0uRZf1lH1ASYJis-vviSdzJ0aOPy/pub?gid=1427899878&single=true&output=csv';
    const res = await fetch(link);
    const text = await res.text();
   

  
    // quebra por cada linha que COMEÇA com uma data no formato dd/mm/aaaa
    const blocks = text.split(/(?=\d{2}\/\d{2}\/\d{4})/g).slice(1);
   

    const instrutores = blocks.map((block, index) => {
      const [data, name, expertise, bio,email, github, instagram, linkedin, image] = block.trim().split(',');
  
      return {
        id: (index + 1).toString(),
        name,
        role: bio,
        bio,
        expertise,
        image: getId(image),
        social:{
          github: github,
          linkedin: linkedin,
          instagram: instagram,
        }
      };
    });
  
    
  
    return instrutores;
  }
  
  

  


  

  export async function getCursos() {
    const link =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vROsUV2SU4TSAu-VnEet3YFjAuHz1ZnM-09euJYTjQjBcDaQ4Vw0uRZf1lH1ASYJis-vviSdzJ0aOPy/pub?gid=811359191&single=true&output=csv';
    const res = await fetch(link);
    const text = await res.text();


  
    // quebra por cada linha que COMEÇA com uma data no formato dd/mm/aaaa
    const blocks = text.split(/(?=\d{2}\/\d{2}\/\d{4})/g).slice(1);
  
    const instrutores = blocks.map((block, index) => {
      const [data, titulo, coluna, sobre,oque, requisitos, ministrantes, auxiliares] = block.trim().split(',');
  
      return {
        id: (index + 1).toString(),
        data,
 
      };
    });
  
    return instrutores;
  }
