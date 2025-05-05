import { google } from 'googleapis';
import { readFileSync } from 'fs';


const auth = new google.auth.GoogleAuth({
  keyFile: '../data/acesso.json',
  scopes: ['https://www.googleapis.com/auth/forms.responses.readonly'],
});

export default async function listarRespostas() {
  const authClient = await auth.getClient();
  const forms = google.forms({ version: 'v1', auth: authClient });

  const formId = '1prpYABSkE6JOg96pHJT1MKZ5HbHUwjdlGpou3jlgc0A';
  const res = await forms.forms.responses.list({ formId });

  console.log(JSON.stringify(res.data, null, 2));
  return res.data;
}

const auth = new google.auth.GoogleAuth({
    keyFile: '../data/acesso.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });
  
  export default async function listarRespostasSheet() {
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient });
  
    const spreadsheetId = 'ID_DA_PLANILHA_DE_RESPOSTAS';
    const range = 'Respostas ao formulário!A1:Z1000'; // ajuste conforme necessário
  
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
  
    console.log(JSON.stringify(res.data, null, 2));
    return res.data;
  }
  
