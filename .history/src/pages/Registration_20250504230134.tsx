
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import RegistrationForm from '@/components/forms/RegistrationForm';
import listarRespostas from ''

const Registration = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tech-blue-light/10 relative overflow-hidden">
        <div className="absolute inset-0 circuit-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-code">
              <span className="text-white">Inscrição </span>
              <span className="text-tech-neon neon-text">FlashClip</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Preencha o formulário abaixo para garantir sua vaga em um dos nossos cursos.
            </p>
          </div>
        </div>
      </section>
      
      {/* Registration Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-lg border border-white/10 bg-tech-blue-light/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-white">Formulário de Inscrição</h2>
              <RegistrationForm />
            </div>
            
            <div className="mt-12 space-y-8">
              <div className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/30 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-3 text-white">Informações Importantes</h3>
                <ul className="space-y-2 text-white/80 list-disc pl-5">
                  <li>Cada participante pode se inscrever em apenas um curso.</li>
                  <li>As vagas são limitadas e preenchidas por ordem de inscrição.</li>
                  <li>A confirmação da inscrição será enviada para o email informado.</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/30 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-3 text-white">Política de Cancelamento</h3>
                <p className="text-white/80">
                  Cancelamentos podem ser feitos até 7 dias antes do início do evento, através do email 
                  <a href="mailto:contatoflashclip@gmail.com" className="text-tech-neon hover:underline ml-1">
                  contatoflashclip@gmail.com
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Registration;
