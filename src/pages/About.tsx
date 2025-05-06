
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { eventInfo } from '@/data/eventInfo';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tech-blue-light/10 relative overflow-hidden">
        <div className="absolute inset-0 circuit-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-code">
              <span className="text-white">Sobre o </span>
              <span className="text-tech-neon neon-text">FlashClip</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              {eventInfo.description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Nossa Missão" centered={false} />
            <div className="space-y-6 text-white/80">
              <p>
                O FlashClip nasceu da necessidade de democratizar o acesso ao conhecimento em programação, focando em linguagens modernas e suas aplicações práticas. Nosso objetivo é criar uma ponte entre a teoria acadêmica e a prática do mercado.
              </p>
              <p>
                Através de cursos intensivos ministrados por profissionais experientes, buscamos oferecer uma experiência imersiva que permita aos participantes desenvolverem novas habilidades em um curto espaço de tempo.
              </p>
              <p>
                Acreditamos que o aprendizado acontece pela prática, por isso todos os nossos cursos têm uma forte componente hands-on, com projetos e exercícios que simulam desafios reais do dia a dia.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Goals */}
      <section className="py-20 bg-tech-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Objetivos" subtitle="Nosso evento foi planejado para alcançar resultados concretos:" />
          
          <div className="max-w-4xl mx-auto mt-12">
            <ul className="space-y-4">
              {eventInfo.goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-tech-neon/20 border border-tech-neon/30 flex items-center justify-center">
                    <span className="text-tech-neon text-sm font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-white/80">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Target Audience */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Público Alvo" 
              subtitle="O FlashClip foi idealizado para atender a um público diversificado:"
            />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventInfo.audience.map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/20 hover:border-tech-neon/30 transition-all backdrop-blur-sm"
                >
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-20 bg-tech-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Benefícios" centered={true} />
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {eventInfo.benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/20 hover:border-tech-neon/30 transition-all backdrop-blur-sm flex items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-tech-blue border border-tech-neon/30 flex items-center justify-center mr-4">
                    <span className="text-tech-neon">✓</span>
                  </div>
                  <p className="text-white/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Organization */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Organização" />
            
            <div className="mt-12 p-8 rounded-lg border border-white/10 bg-tech-blue-light/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-white">{eventInfo.organization.name}</h3>
              
              <div className="space-y-4 text-white/80">
                <p>
                  <strong className="text-tech-neon">Professor orientador:</strong> {eventInfo.organization.coordinator}
                </p>
                <p>
                  <strong className="text-tech-neon">Contato:</strong> {eventInfo.organization.contact}
                </p>
                <p>
                  <strong className="text-tech-neon">Site:</strong> {eventInfo.organization.website}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-tech-blue-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-code">
              <span className="text-white">Pronto para iniciar sua </span>
              <span className="text-tech-neon neon-text">jornada?</span>
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Inscreva-se agora e garanta sua vaga em um dos nossos cursos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-tech-neon text-tech-blue hover:bg-tech-neon/80">
                <Link to="/inscricao">Fazer Inscrição</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-tech-neon text-tech-neon hover:bg-tech-neon hover:text-tech-blue">
                <Link to="/cursos">Ver Cursos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
