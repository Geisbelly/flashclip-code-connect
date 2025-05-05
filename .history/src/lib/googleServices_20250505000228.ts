// import { google } from 'googleapis';

// const auth = new google.auth.GoogleAuth({
//     keyFile: '../data/acesso.json',
//     scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
//   });
  
  export default async function listarRespostasSheet() {
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient as any });
  
    const spreadsheetId = '1xR8TE-fk9mH8kvgSKKDHMDbi74-y1HTweUnml_vHsuQ';
    const range = 'Forms de Inscrição!A1:Z1000'; // ajuste conforme necessário
  
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
  
    console.log(JSON.stringify(res.data, null, 2));
    return res.data;
  }
  
