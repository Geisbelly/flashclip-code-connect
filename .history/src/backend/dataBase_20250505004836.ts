// database.ts
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Cria tabela se não existir
export  async function initDatabase() {
  await sql`
    CREATE TABLE IF NOT EXISTS inscricoes (
      id SERIAL PRIMARY KEY,
      email TEXT NOT NULL,
      nome TEXT NOT NULL,
      telefone TEXT NOT NULL,
      curso TEXT NOT NULL,
      instituicao TEXT NOT NULL,
      minicurso TEXT NOT NULL,
      criado_em TIMESTAMP DEFAULT NOW()
    );
  `;
  console.log('Tabela "inscricoes" pronta');
}

// Insere um novo registro
export default async function inserirInscricao(data: {
  email: string;
  nome: string;
  telefone: string;
  curso: string;
  instituicao: string;
  minicurso: string;
}) {
    await initDatabase()
  const { email, nome, telefone, curso, instituicao, minicurso } = data;

  await sql`
    INSERT INTO inscricoes (email, nome, telefone, curso, instituicao, minicurso)
    VALUES (${email}, ${nome}, ${telefone}, ${curso}, ${instituicao}, ${minicurso});
  `;
}

// Lista todos os registros
export  async function listarInscricoes() {
    await initDatabase()
  const result = await sql`SELECT * FROM inscricoes ORDER BY criado_em DESC`;
  return result;
}
