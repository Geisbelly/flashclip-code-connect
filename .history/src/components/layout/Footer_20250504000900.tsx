
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tech-blue-light/30 pt-0 pb-0 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"> */}
          {/* <div className="flex flex-row align-items-center justify-center md:justify-start">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-tech-neon rounded-full opacity-20"></div>
                <div className="text-tech-neon text-xl font-bold neon-text">{"{}"}</div>
              </div>
              <span className="font-code font-bold text-white text-xl tracking-tight">
                Flash<span className="text-tech-neon">Clip</span>
              </span>
            </Link>
            
            <p className="text-white/70 text-sm mb-4">
              Conecte-se ao futuro da programação
            </p> 
            
            <div className="flex gap-4 mt-2">
              <SocialIcon href="#" icon="github" />
              <SocialIcon href="#" icon="twitter" />
              <SocialIcon href="#" icon="instagram" />
            </div>
          </div> */}
          
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/sobre">Sobre o Evento</FooterLink>
              <FooterLink to="/cursos">Cursos</FooterLink>
              <FooterLink to="/programacao">Programação</FooterLink>
            </ul>
          </div> */}
          
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <FooterLink to="/instrutores">Instrutores</FooterLink>
              <FooterLink to="/faq">Perguntas Frequentes</FooterLink>
              <FooterLink to="/contato">Contato</FooterLink>
              <FooterLink to="/inscricao">Inscrições</FooterLink>
            </ul>
          </div> */}
          
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <address className="text-white/70 text-sm not-italic">
              <p className="mb-2">Universidade Tecnológica</p>
              <p className="mb-2">Av. das Ciências, 1000</p>
              <p className="mb-4">São Paulo, SP</p>
              <p className="flex items-center gap-2 mb-1">
                <span>📧</span>
                <a href="mailto:contato@flashclip.tech" className="text-tech-neon hover:underline">contato@flashclip.tech</a>
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span>
                <a href="tel:+551199999999" className="text-tech-neon hover:underline">(11) 9999-9999</a>
              </p>
            </address>
          </div> */}
        {/* </div> */}
        
        {/* <div className="mt-12 pt-6 border-t border-white/10"> */}
        <div className="flex flex-col md:flex-row justify-between items-center py-3 gap-6 md:gap-0">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} FlashClip. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-8">
            {/* FlashClip */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <span className="font-code font-bold text-white text-[16px] tracking-tight">
                  Flash<span className="text-tech-neon">Clip</span>
                </span>
              </Link>
              <div className="flex gap-3">
                <SocialIcon href="#" icon="github" />
                <SocialIcon href="#" icon="twitter" />
                <SocialIcon href="#" icon="instagram" />
              </div>
            </div>

            {/* UlbraPalmas */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <span className="font-code font-bold text-white text-[16px] tracking-tight">
                  Ulbra<span className="text-tech-neon">Palmas</span>
                </span>
              </Link>
              <div className="flex gap-3">
                <SocialIcon href="#" icon="github" />
                <SocialIcon href="#" icon="twitter" />
                <SocialIcon href="#" icon="instagram" />
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-white/70 hover:text-tech-neon transition-colors">
      {children}
    </Link>
  </li>
);

const FooterSmallLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-white/50 hover:text-tech-neon text-sm transition-colors">
    {children}
  </Link>
);

const SocialIcon = ({ href, icon }: { href: string; icon: string }) => {
  const iconMap: Record<string, string> = {
    github: "M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7C4.73 18.17 4.14 16 4.14 16A2.65 2.65 0 0 0 3 13.97c-.91-.62.07-.6.07-.6a2.11 2.11 0 0 1 1.53 1.03 2.14 2.14 0 0 0 2.91.83 2.16 2.16 0 0 1 .63-1.34c-2.2-.25-4.51-1.1-4.51-4.9a3.89 3.89 0 0 1 1.03-2.71 3.57 3.57 0 0 1 .1-2.64s.83-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.37.83.14 1.87.07 2.64.67.73 1.07 1.7 1.03 2.71 0 3.82-2.34 4.66-4.57 4.9a2.39 2.39 0 0 1 .69 1.85V19c0 .27.16.59.67.5A10 10 0 0 0 10 0z",
    twitter: "M20 3.8a8.5 8.5 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.2 8.2 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 3.93 3.93 0 0 1-1.1.15 4 4 0 0 1-.77-.07 4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 1 16.4a11.57 11.57 0 0 0 6.29 1.84A11.59 11.59 0 0 0 19 6.6v-.53a8.43 8.43 0 0 0 2-2.13z",
    instagram: "M10 0C7.3 0 6.9.01 5.9.05 4.9.09 4.14.23 3.47.49a5.04 5.04 0 0 0-1.8 1.18 5.05 5.05 0 0 0-1.18 1.8c-.26.67-.4 1.43-.44 2.44C.01 6.91 0 7.3 0 10c0 2.7.01 3.1.05 4.1.04 1 .18 1.76.44 2.43a5.05 5.05 0 0 0 1.18 1.8 5.04 5.04 0 0 0 1.8 1.18c.67.26 1.43.4 2.44.44 1 .04 1.4.05 4.1.05 2.7 0 3.1-.01 4.1-.05 1-.04 1.76-.18 2.43-.44a5.04 5.04 0 0 0 1.8-1.18 5.05 5.05 0 0 0 1.18-1.8c.26-.67.4-1.43.44-2.44.04-1 .05-1.4.05-4.1 0-2.7-.01-3.1-.05-4.1-.04-1-.18-1.76-.44-2.43a5.05 5.05 0 0 0-1.18-1.8 5.04 5.04 0 0 0-1.8-1.18c-.67-.26-1.43-.4-2.44-.44C13.1.01 12.7 0 10 0zm0 1.8c2.67 0 2.99.01 4.04.06.97.04 1.5.2 1.86.34.47.18.8.4 1.15.74.34.34.56.68.74 1.15.13.35.3.9.34 1.87.04 1.05.06 1.37.06 4.04 0 2.67-.02 2.99-.06 4.04-.04.97-.2 1.5-.34 1.86a3.25 3.25 0 0 1-.74 1.15 3.25 3.25 0 0 1-1.15.74c-.35.13-.9.3-1.87.34-1.05.04-1.37.06-4.04.06-2.67 0-2.99-.02-4.04-.06-.97-.04-1.5-.2-1.86-.34a3.25 3.25 0 0 1-1.15-.74 3.25 3.25 0 0 1-.74-1.15c-.13-.35-.3-.9-.34-1.87-.04-1.05-.06-1.37-.06-4.04 0-2.67.02-2.99.06-4.04.04-.97.2-1.5.34-1.86.18-.47.4-.8.74-1.15.34-.34.68-.56 1.15-.74.35-.13.9-.3 1.87-.34 1.05-.04 1.37-.06 4.04-.06z M10 13.33a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66zm0-8.46a5.13 5.13 0 1 0 0 10.26 5.13 5.13 0 0 0 0-10.26zm6.54-.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
  };
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-6 h-6 rounded-full flex items-center justify-center border border-white/20 text-white/70 hover:text-tech-neon hover:border-tech-neon transition-colors"
    >
      <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
        <path d={iconMap[icon]} />
      </svg>
    </a>
  );
};

export default Footer;
