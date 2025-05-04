
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import ScheduleItem from '@/components/common/ScheduleItem';
import { scheduleData } from '@/data/schedule';
import { coursesData } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Schedule = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Group schedules by date
  const schedulesByDate = scheduleData.reduce((acc: Record<string, any[]>, schedule) => {
    const date = schedule.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(schedule);
    return acc;
  }, {});
  
  // Sort dates
  const sortedDates = Object.keys(schedulesByDate).sort((a, b) => 
    new Date(a).getTime() - new Date(b).getTime()
  );
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tech-blue-light/10 relative overflow-hidden">
        <div className="absolute inset-0 circuit-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-code">
              <span className="text-white">Programação </span>
              <span className="text-tech-neon neon-text">do Evento</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Confira todas as datas e horários dos cursos do FlashClip.
            </p>
          </div>
        </div>
      </section>
      
      {/* Schedule Filter */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">Aulas e Atividades</h2>
            
            <div className="w-full sm:w-auto">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full sm:w-52 bg-tech-blue-light/30 border-white/10 text-white">
                  <SelectValue placeholder="Filtrar por curso" />
                </SelectTrigger>
                <SelectContent className="bg-tech-blue-light border-white/10">
                  <SelectItem value="all" className="text-white hover:text-tech-neon">Todos os Cursos</SelectItem>
                  {coursesData.map(course => (
                    <SelectItem key={course.id} value={course.id} className="text-white hover:text-tech-neon">
                      {course.language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-12">
            {sortedDates.map(date => {
              const filteredSchedules = filter === 'all' 
                ? schedulesByDate[date] 
                : schedulesByDate[date].filter(s => s.courseId === filter);
              
              if (filteredSchedules.length === 0) return null;
              
              const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
              
              return (
                <div key={date}>
                  <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2">
                    {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredSchedules.map(schedule => (
                      <ScheduleItem key={schedule.id} {...schedule} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Location Info */}
      <section className="py-20 bg-tech-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Informações do Local" />
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-10">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Cursos Presenciais</h3>
                <div className="prose prose-invert text-white/80">
                  <p>Os cursos presenciais serão realizados no campus principal da Universidade Tecnológica.</p>
                  <address className="not-italic">
                    <p className="mb-2">Av. das Ciências, 1000</p>
                    <p className="mb-2">Bairro Universitário</p>
                    <p>São Paulo, SP - CEP 01010-000</p>
                  </address>
                  <p className="mt-4">
                    <strong>Como chegar:</strong> O campus é facilmente acessível por transporte público. 
                    A estação de metrô mais próxima é "Universidade", a 500m do local.
                  </p>
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.2326798209405!2d-51.186447225411236!3d-29.95110082937636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c4c3%3A0xf33d621c8c7b48b9!2sULBRA%20-%20Universidade%20Luterana%20do%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1680281182958!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="250" 
                      style={{ border: 0 }} 
                      allowFullScreen
                      loading="lazy" 
                      title="Mapa ULBRA"
                    />
                </div>
              </div>
              
              {/* <div>
                <h3 className="text-xl font-bold mb-4 text-white">Cursos Virtuais</h3>
                <div className="prose prose-invert text-white/80">
                  <p>Os cursos virtuais serão realizados através da plataforma Zoom.</p>
                  <p>
                    Os participantes receberão por email os links de acesso às aulas 
                    com 24 horas de antecedência.
                  </p>
                  <p className="mt-4">
                    <strong>Requisitos técnicos:</strong>
                  </p>
                  <ul>
                    <li>Computador com acesso à internet</li>
                    <li>Navegador atualizado (Chrome, Firefox ou Edge)</li>
                    <li>Microfone e webcam (opcionais, mas recomendados)</li>
                    <li>Aplicativo Zoom instalado ou acesso via navegador</li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Registration CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-code">
              <span className="text-white">Pronto para se </span>
              <span className="text-tech-neon neon-text">inscrever?</span>
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Escolha o curso que mais combina com você e garanta sua vaga agora mesmo.
            </p>
            <Button asChild size="lg" className="bg-tech-neon text-tech-blue hover:bg-tech-neon/80">
              <Link to="/inscricao">Fazer Inscrição</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Schedule;
