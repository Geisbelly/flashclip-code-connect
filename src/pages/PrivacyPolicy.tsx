import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <section className="px-64 py-32 relative">
        <div className="absolute inset-0 circuit-overlay"></div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-code">
          <span className="text-white">Política de </span>
          <span className="text-tech-neon neon-text">Privacidade</span>
        </h1>

        <div className="text-base text-white/80 mb-8 space-y-2">
          <p>
            Esta Política de Privacidade tem como objetivo informar, de maneira clara e transparente, quais dados pessoais são coletados e como são utilizados no contexto do evento organizado pela turma de Paradigmas da Ulbra Palmas – 2025.
          </p>

          <br />
          <p>
            <strong>1. Dados coletados</strong>
          </p>
          <p>
            Durante a inscrição e participação no evento, são coletados exclusivamente os dados fornecidos voluntariamente pelos participantes, tais como:
          </p>
          <ul className="list-disc pl-5">
            <li>Nome completo</li>
            <li>E-mail</li>
            <li>CPF (apenas para participantes do curso presencial, com a finalidade de emissão de certificados via EDUCOM)</li>
          </ul>
          <p>
            Ressaltamos que <strong>nenhum dado de acesso ou navegação é coletado</strong> por meio deste site. Também não utilizamos cookies ou qualquer tipo de rastreamento automático.
          </p>

          <br />
          <p>
            <strong>2. Finalidade do uso das informações</strong>
          </p>
          <p>
            Os dados coletados são utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-5">
            <li>Emitir certificados de participação</li>
            <li>Gerenciar listas de presença</li>
            <li>Controlar o acesso ao material didático disponibilizado</li>
            <li>Comunicar-se com os participantes, quando necessário</li>
          </ul>

          <br />
          <p>
            <strong>3. Sigilo das chaves de acesso</strong>
          </p>
          <p>
            As chaves fornecidas durante o curso, como formulários de presença e links para os materiais, devem ser mantidas em sigilo pelos participantes. Elas são de uso exclusivo e não devem ser compartilhadas com terceiros.
          </p>

          <br />
          <p>
            <strong>4. Acesso aos dados</strong>
          </p>
          <p>
            Os dados pessoais fornecidos são acessados apenas por:
          </p>
          <ul className="list-disc pl-5">
            <li>Alunos organizadores do evento (Turma de Paradigmas – Ulbra Palmas 2025)</li>
            <li>Professores e coordenadores envolvidos no processo burocrático e acadêmico do evento</li>
          </ul>
          <p>
            Nenhum dado é compartilhado com terceiros ou utilizado para fins comerciais.
          </p>

          <br />
          <p>
            <strong>5. Segurança dos dados</strong>
          </p>
          <p>
            Os dados são armazenados de forma segura e utilizados exclusivamente no âmbito do evento. Não há coleta ou armazenamento de informações sensíveis além do necessário para certificação. Medidas básicas de segurança são adotadas para evitar o uso indevido dessas informações.
          </p>

          <br />
          <p>
            <strong>6. Alterações na política</strong>
          </p>
          <p>
            Esta política poderá ser atualizada conforme necessidade do evento. Recomenda-se sua leitura periódica para manter-se informado(a) sobre como seus dados são tratados.
          </p>

          <br />
          <p>
            <strong>7. Contato</strong>
          </p>
          <p>
            Em caso de dúvidas ou solicitações relacionadas aos dados fornecidos, entre em contato através do e-mail: <strong>contatoflashclip@gmail.com</strong>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
