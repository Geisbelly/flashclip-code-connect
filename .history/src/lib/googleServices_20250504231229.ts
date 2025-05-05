import { google } from 'googleapis';
const json = {"web":{"client_id":"1060947087290-6evqffgh2im3i2blsh8c96urdp05nq5m.apps.googleusercontent.com","project_id":"wide-office-452913-v7","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","javascript_origins":["https://flash-clip.vercel.app"]}}
import { readFileSync } from 'fs';

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

