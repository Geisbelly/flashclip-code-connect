import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import { coursesData } from '@/data/courses';
import { scheduleData } from '@/data/schedule';
import ScheduleItem, { ScheduleItemProps } from '@/components/common/ScheduleItem';
import { CourseProps } from '@/components/common/CourseCard';
import { InstructorProps } from '@/components/common/InstructorCard';
import { Corner } from '@radix-ui/react-scroll-area';
import { getInstrutores } from '@/lib/googleServices';

// 💡 Criado componente auxiliar que estava faltando
const LearningItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="text-tech-neon">•</span>
    <span>{children}</span>
  </li>
);

const iconMap: Record<string, string> = {
  github: "M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7C4.73 18.17 4.14 16 4.14 16A2.65 2.65 0 0 0 3 13.97c-.91-.62.07-.6.07-.6a2.11 2.11 0 0 1 1.53 1.03 2.14 2.14 0 0 0 2.91.83 2.16 2.16 0 0 1 .63-1.34c-2.2-.25-4.51-1.1-4.51-4.9a3.89 3.89 0 0 1 1.03-2.71 3.57 3.57 0 0 1 .1-2.64s.83-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.37.83.14 1.87.07 2.64.67.73 1.07 1.7 1.03 2.71 0 3.82-2.34 4.66-4.57 4.9a2.39 2.39 0 0 1 .69 1.85V19c0 .27.16.59.67.5A10 10 0 0 0 10 0z",
  linkedin: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
  twitter: "M20 3.8a8.5 8.5 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.2 8.2 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 3.93 3.93 0 0 1-1.1.15 4 4 0 0 1-.77-.07 4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 1 16.4a11.57 11.57 0 0 0 6.29 1.84A11.59 11.59 0 0 0 19 6.6v-.53a8.43 8.43 0 0 0 2-2.13z",
  instagram:"M10 0C7.3 0 6.9.01 5.9.05 4.9.09 4.14.23 3.47.49a5.04 5.04 0 0 0-1.8 1.18 5.05 5.05 0 0 0-1.18 1.8c-.26.67-.4 1.43-.44 2.44C.01 6.91 0 7.3 0 10c0 2.7.01 3.1.05 4.1.04 1 .18 1.76.44 2.43a5.05 5.05 0 0 0 1.18 1.8 5.04 5.04 0 0 0 1.8 1.18c.67.26 1.43.4 2.44.44 1 .04 1.4.05 4.1.05 2.7 0 3.1-.01 4.1-.05 1-.04 1.76-.18 2.43-.44a5.04 5.04 0 0 0 1.8-1.18 5.05 5.05 0 0 0 1.18-1.8c.26-.67.4-1.43.44-2.44.04-1 .05-1.4.05-4.1 0-2.7-.01-3.1-.05-4.1-.04-1-.18-1.76-.44-2.43a5.05 5.05 0 0 0-1.18-1.8 5.04 5.04 0 0 0-1.8-1.18c-.67-.26-1.43-.4-2.44-.44C13.1.01 12.7 0 10 0zm0 1.8c2.67 0 2.99.01 4.04.06.97.04 1.5.2 1.86.34.47.18.8.4 1.15.74.34.34.56.68.74 1.15.13.35.3.9.34 1.87.04 1.05.06 1.37.06 4.04 0 2.67-.02 2.99-.06 4.04-.04.97-.2 1.5-.34 1.86a3.25 3.25 0 0 1-.74 1.15 3.25 3.25 0 0 1-1.15.74c-.35.13-.9.3-1.87.34-1.05.04-1.37.06-4.04.06-2.67 0-2.99-.02-4.04-.06-.97-.04-1.5-.2-1.86-.34a3.25 3.25 0 0 1-1.15-.74 3.25 3.25 0 0 1-.74-1.15c-.13-.35-.3-.9-.34-1.87-.04-1.05-.06-1.37-.06-4.04 0-2.67.02-2.99.06-4.04.04-.97.2-1.5.34-1.86.18-.47.4-.8.74-1.15.34-.34.68-.56 1.15-.74.35-.13.9-.3 1.87-.34 1.05-.04 1.37-.06 4.04-.06z M10 13.33a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66zm0-8.46a5.13 5.13 0 1 0 0 10.26 5.13 5.13 0 0 0 0-10.26zm6.54-.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
};


// 💡 Componente SocialLink para links dos instrutores
const SocialLink = ({ href, icon }: { href: string; icon: 'github' | 'linkedin' | 'twitter'|'instagram' }) => (
  <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 text-white/70 hover:text-tech-neon hover:border-tech-neon transition-colors"
    >
      <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
        <path d={iconMap[icon]} />
      </svg>
    </a>
);

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<CourseProps | null>(null);
  const [instructors, setInstructors] = useState([]);
  const [courseSchedules, setCourseSchedules] = useState<ScheduleItemProps[]>([]);

  const [instructorsData, setInstructorsData] = useState([]);

  useEffect(() => {
    const foundCourse = coursesData.find((c) => c.id === id);
    setCourse(foundCourse || null);

    

    if (foundCourse) {
      const foundSchedules = scheduleData.filter((s) => s.courseId === id);
      setCourseSchedules(foundSchedules);
          
      async function buscarInstrutores() {
        const dados = await getInstrutores();
      
        // 1. Filtra pela linguagem do curso
        const filtrados = dados.filter((instrutor) =>
          instrutor.expertise.includes(foundCourse.language)
        );
      
        // 2. Ordena priorizando quem tem "Líder" em expertise, depois por nome
        const lista_ordenada = filtrados.sort((a, b) => {
          const aIsLider = a.expertise.includes("Líder") ? 0 : 1;
          const bIsLider = b.expertise.includes("Líder") ? 0 : 1;
      
          if (aIsLider !== bIsLider) {
            return aIsLider - bIsLider; // Líder primeiro
          }
      
          return a.name.localeCompare(b.name); // Depois ordena por nome
        });
      
        setInstructorsData(lista_ordenada);
        setInstructors(lista_ordenada);
      }
    buscarInstrutores()      
          

    }
  }, [id]);

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl text-white">Curso não encontrado</h1>
            <Link to="/cursos" className="mt-4 text-tech-neon hover:underline inline-block">
              Voltar para a lista de cursos
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tech-blue-light/10 relative overflow-hidden">
        <div className="absolute inset-0 circuit-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-tech-blue-light/50 text-white border-tech-neon/30">
                {course.language}
              </Badge>
              <Badge variant={course.level === 'Iniciante' ? 'default' : 'secondary'} className="bg-tech-neon/20 text-tech-neon border border-tech-neon/30">
                {course.level}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              {course.title}
            </h1>

            <p className="text-xl text-white/80 mb-8">{course.description}</p>

            <div className="flex flex-wrap gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-tech-neon" />
                <span>{course.hours} horas de curso</span>
              </div>
              {course.instructor.map((name, index) => (
                <div key={index} className="flex items-center gap-2">
                  <User size={18} className="text-tech-neon" />
                  <span>{name}</span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-tech-neon" />
                <span>{courseSchedules.length} sessões</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">Sobre o Curso</h2>
                  <div className="prose prose-invert text-white/80 max-w-none">
                    <p>
                      Este curso foi desenvolvido para proporcionar uma imersão prática na linguagem {course.language}.
                    </p>
                    <p>
                      Os participantes desenvolverão projetos práticos aplicando os conhecimentos adquiridos.
                    </p>
                    <p>
                      Ao final, você terá habilidades para criar suas próprias aplicações e evoluir de forma autônoma.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">O que você vai aprender</h2>
                  <ul className="space-y-3 text-white/80">
                    <LearningItem>Fundamentos da linguagem {course.language}</LearningItem>
                    <LearningItem>Algoritmos aplicado em {course.language}</LearningItem>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">Requisitos</h2>
                  <ul className="space-y-3 text-white/80">
                  {course.prerequisites.map((prereq, index) => (
                      <LearningItem key={index}>{prereq}</LearningItem>
                    ))}
                    
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">Programação</h2>
                  <div className="space-y-4">
                    {courseSchedules.map((schedule) => (
                      <ScheduleItem key={schedule.id} {...schedule} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/30 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4 text-white">Faça sua inscrição!</h3>
                  <p className="text-white/80 mb-4">
                    As vagas são limitadas e as inscrições podem ser encerradas a qualquer momento.
                  </p>
                  <div className="mt-8">
                    <Button asChild className="w-full bg-tech-neon text-tech-blue hover:bg-tech-neon/80">
                      <Link to="/inscricao">Inscrever-se</Link>
                    </Button>
                  </div>
                </div>

                {instructors.length > 0 && (
                  <div className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/30 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-4 text-white">Instrutores</h3>
                    <div className="space-y-6">
                      {instructors.map((inst, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-tech-neon/30 flex-shrink-0">
                            <img
                              src={inst.image ? `/integrantes/${inst.image}.jpg`:'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=2400&auto=format&fit=crop'}
                              alt={inst.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white">{inst.name}</h4>
                            <p className="text-white/70 text-sm">{inst.role}</p>
                            {/* <p className="text-white/80 text-sm mt-2">{inst.bio}</p> */}
                            <div className="flex gap-3 mt-2">
                              {inst.social?.github && <SocialLink href={inst.social.github} icon="github" />}
                              {inst.social?.linkedin && <SocialLink href={inst.social.linkedin} icon="linkedin" />}
                              {inst.social?.twitter && <SocialLink href={inst.social.twitter} icon="twitter" />}
                              {inst.social?.instagram && <SocialLink href={inst.social.instagram} icon="instagram" />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/30 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4 text-white">Dúvidas?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Se você tiver qualquer dúvida sobre este curso, não hesite em entrar em contato conosco.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contato">Entrar em contato</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CourseDetail;
