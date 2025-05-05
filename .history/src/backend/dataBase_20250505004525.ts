// server.ts
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { neon } from '@neondatabase/serverless';

const fastify = Fastify();
await fastify.register(cors);

const sql = neon(process.env.DATABASE_URL!);

fastify.post('/inscricao', async (req, reply) => {
  const { email, nome, telefone, curso, instituicao, minicurso } = req.body;

  await sql(
    `INSERT INTO inscricoes (email, nome, telefone, curso, instituicao, minicurso)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [email, nome, telefone, curso, instituicao, minicurso]
  );

  return reply.send({ status: 'ok' });
});

fastify.listen({ port: 3001 }, () => {
  console.log('API rodando em http://localhost:3001');
});
