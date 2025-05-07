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
            Esta Política de Privacidade descreve como suas informações pessoais
            são coletadas, usadas e compartilhadas quando você visita este site.
          </p>
          <br />
          <p>
            <strong>1. Informações que coletamos</strong>
          </p>
          <p>
            Ao visitar este site, podemos coletar automaticamente certas
            informações sobre o seu dispositivo, como:
          </p>
          <ul className="list-disc pl-5">
            <li>Endereço IP</li>
            <li>Tipo de navegador</li>
            <li>Páginas acessadas</li>
            <li>Horário e data de acesso</li>
          </ul>
          <br />
          <p>
            Se houver formulários de contato ou de inscrição, também podemos
            coletar informações que você fornecer voluntariamente, como:
          </p>
          <ul className="list-disc pl-5">
            <li>Nome</li>
            <li>E-mail</li>
            <li>Outras informações de contato</li>
          </ul>
          <br />
          <p>
            <strong>2. Como usamos suas informações</strong>
          </p>
          <p>Utilizamos as informações coletadas para:</p>
          <ul className="list-disc pl-5">
            <li>Melhorar e otimizar o site</li>
            <li>Entrar em contato com você, se necessário</li>
            <li>Analisar o tráfego e o comportamento dos usuários</li>
          </ul>
          <p>
            Não vendemos, trocamos ou transferimos suas informações pessoais
            para terceiros, exceto quando exigido por lei.
          </p>
          <br />
          <p>
            <strong>3. Cookies</strong>
          </p>
          <p>
            Este site pode usar cookies para melhorar sua experiência de
            navegação. Você pode configurar seu navegador para recusar todos os
            cookies ou indicar quando um cookie está sendo enviado.
          </p>
          <br />
          <p>
            <strong>4. Links para sites de terceiros</strong>
          </p>
          <p>
            Nosso site pode conter links para outros sites. Não somos
            responsáveis pelas práticas de privacidade desses sites e
            recomendamos que você leia as políticas de privacidade de cada um
            deles.
          </p>
          <br />
          <p>
            <strong>5. Segurança</strong>
          </p>
          <p>
            Adotamos medidas de segurança para proteger suas informações. No
            entanto, nenhum sistema é totalmente seguro, e não podemos garantir
            a segurança absoluta dos dados transmitidos pela internet.
          </p>
          <br />
          <p>
            <strong>6. Alterações nesta política</strong>
          </p>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente.
            Recomendamos que você a revise com frequência para se manter
            informado sobre como protegemos suas informações.
          </p>
          <br />
          <p>
            <strong>7. Contato</strong>
          </p>
          <p>
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em
            contato pelo e-mail: <strong>[seuemail@exemplo.com]</strong>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
