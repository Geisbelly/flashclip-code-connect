
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import InstructorCard from '@/components/common/InstructorCard';
import { instructorsData } from '@/data/instructors';

const Instructors = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tech-blue-light/10 relative overflow-hidden">
        <div className="absolute inset-0 circuit-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-code">
              <span className="text-white">Nossos </span>
              <span className="text-tech-neon neon-text">Instrutores</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Conheça os especialistas que irão compartilhar seus conhecimentos durante o evento.
            </p>
          </div>
        </div>
      </section>
      
      {/* Instructors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructorsData.map(instructor => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Values
      <section className="py-20 bg-tech-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Nossa Filosofia" 
            subtitle="No FlashClip, acreditamos que a excelência em ensino vem da combinação de conhecimento técnico e experiência prática."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ValueCard 
              title="Conhecimento Prático" 
              description="Nossos instrutores são profissionais ativos no mercado que trazem experiências reais para a sala de aula."
            />
            <ValueCard 
              title="Ensino Personalizado" 
              description="Focamos em turmas reduzidas para garantir atenção individualizada aos participantes."
            />
            <ValueCard 
              title="Aprendizado Contínuo" 
              description="Incentivamos o desenvolvimento constante, compartilhando recursos e oportunidades além do evento."
            />
          </div>
        </div>
      </section>
      
      {/* Join CTA */}
      <section className="py-20 bg-tech-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-code">
              <span className="text-white">Interessado em ser um </span>
              <span className="text-tech-neon neon-text">instrutor?</span>
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Estamos sempre em busca de novos talentos para nossos eventos futuros. Se você é um especialista em alguma linguagem de programação e tem interesse em compartilhar seu conhecimento, entre em contato conosco.
            </p>
            <a 
              href="mailto:contato@flashclip.tech"
              className="inline-flex h-10 items-center justify-center rounded-md bg-tech-neon px-8 text-sm font-medium text-tech-blue shadow transition-colors hover:bg-tech-neon/80"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section> */}
      
      <Footer />
    </>
  );
};

const ValueCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/20 hover:border-tech-neon/30 transition-all backdrop-blur-sm h-full flex flex-col">
    <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
    <p className="text-white/70 flex-grow">{description}</p>
  </div>
);

export default Instructors;
