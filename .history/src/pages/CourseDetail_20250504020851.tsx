import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import { coursesData } from '@/data/courses';
import { instructorsData } from '@/data/instructors';
import { scheduleData } from '@/data/schedule';
import ScheduleItem, { ScheduleItemProps } from '@/components/common/ScheduleItem';
import { CourseProps } from '@/components/common/CourseCard';
import { InstructorProps } from '@/components/common/InstructorCard';

// 💡 Criado componente auxiliar que estava faltando
const LearningItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="text-tech-neon">•</span>
    <span>{children}</span>
  </li>
);

// 💡 Componente SocialLink para links dos instrutores
const SocialLink = ({ href, icon }: { href: string; icon: 'github' | 'linkedin' | 'twitter' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-tech-neon hover:underline text-sm"
  >
    @{icon}
  </a>
);

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<CourseProps | null>(null);
  const [instructors, setInstructors] = useState<InstructorProps[]>([]);
  const [courseSchedules, setCourseSchedules] = useState<ScheduleItemProps[]>([]);

  useEffect(() => {
    const foundCourse = coursesData.find((c) => c.id === id);
    setCourse(foundCourse || null);

    if (foundCourse) {
      const foundSchedules = scheduleData.filter((s) => s.courseId === id);
      setCourseSchedules(foundSchedules);

      const matchedInstructors = foundCourse.instructor
        .map((name) => instructorsData.find((i) => i.name === name))
        .filter(Boolean) as InstructorProps[];

      setInstructors(matchedInstructors);
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
            
            <p className="text-xl text-white/80 mb-8">
              {course.description}
            </p>
            
            <div className="flex flex-wrap gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-tech-neon" />
                <span>{course.hours} horas de curso</span>
              </div>
              {course.instructor.map((req, index) => (
                <div key={index} className="flex items-center gap-2">
                <User size={18} className="text-tech-neon" />
                <span>{req}</span>
              </div>))}
              
              
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
                      Este curso foi desenvolvido para proporcionar uma imersão prática na linguagem {course.language}, apresentando conceitos fundamentais e aplicações do mundo real.
                    </p>
                    <p>
                      Durante o curso, os participantes terão a oportunidade de desenvolver projetos práticos, aplicando os conhecimentos adquiridos e explorando as melhores práticas da indústria.
                    </p>
                    <p>
                      Ao final do curso, você terá desenvolvido habilidades suficientes para criar suas próprias aplicações e continuar seu aprendizado de forma autônoma.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">O que você vai aprender</h2>
                  <ul className="space-y-3 text-white/80">
                    <LearningItem>Fundamentos da linguagem {course.language} e seu ecossistema</LearningItem>
                    <LearningItem>Estruturas de dados e algoritmos específicos</LearningItem>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">Programação</h2>
                  <div className="space-y-4">
                    {courseSchedules.map(schedule => (
                      <ScheduleItem key={schedule.id} {...schedule} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/30 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4 text-white">Requisitos</h3>
                  <ul className="space-y-3 text-white/80">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-tech-neon">•</span>
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Button asChild className="w-full bg-tech-neon text-tech-blue hover:bg-tech-neon/80">
                      <Link to="/inscricao">Inscrever-se</Link>
                    </Button>
                  </div>
                </div>
                
                {instructors && (
                  <div className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/30 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-4 text-white">Instrutores</h3>
                    
                    <div className="flex items-center gap-4 mb-4">
                    {instructors.map((inst: InstructorProps, idx: number) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-tech-neon/30 flex-shrink-0">
                        <img
                          src={inst.image || "https://via.placeholder.com/151"}
                          alt={inst.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white">{inst.name}</h4>
                        <p className="text-white/70 text-sm">{inst.role}</p>
                        <p className="text-white/80 text-sm mt-2">{inst.bio}</p>
                        
                        <div className="flex gap-3 mt-2">
                          {inst.social?.github && (
                            <SocialLink href={inst.social.github} icon="github" />
                          )}
                          {inst.social?.linkedin && (
                            <SocialLink href={inst.social.linkedin} icon="linkedin" />
                          )}
                          {inst.social?.twitter && (
                            <SocialLink href={inst.social.twitter} icon="twitter" />
                          )}
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
                  <Button asChild variant="outline" className="w-full border-tech-neon text-tech-neon hover:bg-tech-neon hover:text-tech-blue">
                    <Link to="/contato">Contate-nos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Courses */}
      <section className="py-20 bg-tech-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Outros Cursos que Podem te Interessar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coursesData
              .filter(c => c.id !== course.id)
              .slice(0, 3)
              .map(relatedCourse => (
                <div 
                  key={relatedCourse.id} 
                  className="p-6 rounded-lg border border-white/10 bg-tech-blue-light/20 hover:border-tech-neon/30 transition-all backdrop-blur-sm"
                >
                  <h3 className="font-bold mb-2 text-white">
                    {relatedCourse.language}: {relatedCourse.title.split('–')[1].trim()}
                  </h3>
                  <p className="text-sm text-white/70 mb-4">{relatedCourse.description}</p>
                  <Button asChild variant="outline" className="w-full border-white/20 text-white hover:border-tech-neon hover:text-tech-neon">
                    <Link to={`/cursos/${relatedCourse.id}`}>Ver Detalhes</Link>
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};



  
  return (
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
};

export default CourseDetail;
