import { google } from 'googleapis';
import { readFileSync } from 'fs';
import {}

const auth = new google.auth.GoogleAuth({
  keyFile: JSON.stringify(json), // caminho pro JSON que você baixa do Google Cloud
  scopes: ['https://www.googleapis.com/auth/forms.responses.readonly'],
});

export async function listarRespostas() {
  const authClient = await auth.getClient();
  const forms = google.forms({ version: 'v1', auth: authClient });

  const formId = '1prpYABSkE6JOg96pHJT1MKZ5HbHUwjdlGpou3jlgc0A';
  const res = await forms.forms.responses.list({ formId });

  console.log(JSON.stringify(res.data, null, 2));
  return res.data;
}

