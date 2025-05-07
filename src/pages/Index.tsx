
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Star, User, Video } from "lucide-react";
import CountdownTimer from '@/components/common/CountdownTimer';
import SectionTitle from '@/components/common/SectionTitle';
import CourseCard from '@/components/common/CourseCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import { coursesData } from '@/data/courses';
import { testimonialsData } from '@/data/testimonials';
import { eventInfo } from '@/data/eventInfo';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-24 overflow-hidden tech-grid">
        <div className="absolute inset-0 circuit-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-code mb-6 animate-fade-in">
              <span className="text-white">Flash</span>
              <span className="text-tech-neon neon-text">Clip</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-10 text-white/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {eventInfo.tagline}
            </p>
            
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CountdownTimer targetDate={eventInfo.targetDate} />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button asChild size="lg" className="bg-tech-neon text-tech-blue hover:bg-tech-neon/80 font-medium">
                <Link to="/inscricao">Inscreva-se Agora</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-tech-neon text-tech-neon hover:bg-tech-neon hover:text-tech-blue">
                <Link to="/sobre">Saiba Mais</Link>
              </Button>
            </div>
            
            <div className="mt-12 text-white/50 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <p>Local: {eventInfo.location}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-tech-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Por que participar" 
            subtitle="Introdução prática a linguagens de programação, com seu primeiro contato no mundo do código."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <FeatureCard
              icon={<Calendar className="w-8 h-8 text-tech-neon" />}
              title="Apenas 3 horas"
              description="Cursos rápidos e focados para aprendizado eficiente."
            />
            <FeatureCard
              icon={<Video className="w-8 h-8 text-tech-neon" />}
              title="Playground"
              description="Se divirta com 5 linguagens desafiadoras e divertidas."
            />
            <FeatureCard
              icon={<User className="w-8 h-8 text-tech-neon" />}
              title="Aprendendo Juntos"
              description="Estude com colegas que sabem compartilhar e aprender colaborativamente."
            />
            <FeatureCard
              icon={<Star className="w-8 h-8 text-tech-neon" />}
              title="Certificado Digital"
              description="Ganhe um certificado para adicionar ao seu currículo."
            />
          </div>
        </div>
      </section>

      
      {/* Courses Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Nossos Cursos" 
            subtitle="Escolha entre 5 linguagens de programação modernas e suas aplicações práticas."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coursesData.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-tech-neon text-tech-blue hover:bg-tech-neon/80">
              <Link to="/cursos">Ver Todos os Cursos</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Quiz CTA */}
      <section className="py-20 bg-tech-blue-light/10 relative overflow-hidden">
        <div className="absolute inset-0 circuit-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-code">
              <span className="text-white">Não sabe qual curso </span>
              <span className="text-tech-neon neon-text">escolher?</span>
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Faça nosso teste rápido e descubra qual linguagem de programação combina mais com o seu perfil!
            </p>
            <Button asChild size="lg" className="animate-pulse-glow bg-tech-neon text-tech-blue hover:bg-tech-neon/80">
              <Link to="/quiz">Fazer o Teste</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Depoimentos" 
            subtitle="Veja o que os participantes das edições anteriores têm a dizer."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Registration CTA */}
      {/* <section className="py-20 bg-tech-blue-light/20"> */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-code">
              <span className="text-white">Pronto para dar o </span>
              <span className="text-tech-neon neon-text">próximo passo?</span>
            </h2>
            <p className="text-lg mb-8 text-white/80">
              As vagas são limitadas e as inscrições já estão abertas. Não perca essa oportunidade!
            </p>
            <Button asChild size="lg" className="bg-tech-neon text-tech-blue hover:bg-tech-neon/80">
              <Link to="/inscricao">Inscreva-se Agora</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/20 hover:border-tech-neon/30 transition-all duration-300 backdrop-blur-sm">
      <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-full bg-tech-blue border border-tech-neon/30">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default Index;
