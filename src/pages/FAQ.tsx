
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import FAQAccordion from '@/components/common/FAQAccordion';
import { faqData } from '@/data/faq';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tech-blue-light/10 relative overflow-hidden">
        <div className="absolute inset-0 circuit-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-code">
              <span className="text-white">Perguntas </span>
              <span className="text-tech-neon neon-text">Frequentes</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Encontre respostas para as dúvidas mais comuns sobre o FlashClip.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqData} />
            
            <div className="mt-12 p-6 rounded-lg border border-white/10 bg-tech-blue-light/20 text-center">
              <h3 className="text-xl font-bold mb-3 text-white">Ainda tem dúvidas?</h3>
              <p className="text-white/80 mb-6">
                Se você não encontrou a resposta para a sua pergunta, entre em contato conosco.
              </p>
              <Button asChild className="bg-tech-neon text-tech-blue hover:bg-tech-neon/80">
                <Link to="/contato">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default FAQ;
