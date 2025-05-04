
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import LanguageQuiz from '@/components/quiz/LanguageQuiz';

const Quiz = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tech-blue-light/10 relative overflow-hidden">
        <div className="absolute inset-0 circuit-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-code">
              <span className="text-white">Descubra sua </span>
              <span className="text-tech-neon neon-text">Linguagem</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Responda algumas perguntas simples para descobrir qual linguagem combina mais com o seu perfil.
            </p>
          </div>
        </div>
      </section>
      
      {/* Quiz Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <SectionTitle 
                title="Quiz de Perfil" 
                subtitle="Este teste ajudará a identificar qual das nossas linguagens de programação melhor se adapta ao seu estilo e objetivos."
              />
            </div>
            
            <LanguageQuiz />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Quiz;
