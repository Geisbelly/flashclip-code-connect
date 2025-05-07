import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/common/SectionTitle";
import CourseCard from "@/components/common/CourseCard";
import { coursesData } from "@/data/courses";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Courses = () => {
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
              <span className="text-tech-neon neon-text">Cursos</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Conheça os cursos disponíveis no FlashClip e escolha o que melhor
              se adapta às suas necessidades e objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Não sabe qual curso escolher? Faça nosso teste de perfil para
              descobrir qual linguagem combina mais com você.
            </p>
            <Button
              asChild
              className="bg-tech-neon text-tech-blue hover:bg-tech-neon/80"
            >
              <Link to="/quiz">Fazer o Teste de Perfil</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-tech-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Comparativo dos Cursos"
            subtitle="Veja as principais características de cada curso para ajudar na sua escolha"
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left text-white">Linguagem</th>
                  <th className="py-4 px-6 text-left text-white">Nível</th>
                  <th className="py-4 px-6 text-center text-white">
                    Carga Horária
                  </th>
                  <th className="py-4 px-6 text-left text-white">Formato</th>
                  <th className="py-4 px-6 text-left text-white">
                    Melhor Para
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-4 px-6 text-tech-neon">C#</td>
                  <td className="py-4 px-6 text-white/80">Básico</td>
                  <td className="py-4 px-6 text-white/80 text-center">
                    3 horas
                  </td>
                  <td className="py-4 px-6 text-white/80">Presencial</td>
                  <td className="py-4 px-6 text-white/80">
                    Aplicações desktop e empresariais
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-4 px-6 text-tech-neon">TypeScript</td>
                  <td className="py-4 px-6 text-white/80">Intermediário</td>
                  <td className="py-4 px-6 text-white/80 text-center">
                    3 horas
                  </td>
                  <td className="py-4 px-6 text-white/80">Presencial</td>
                  <td className="py-4 px-6 text-white/80">
                    Desenvolvimento web front-end
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-4 px-6 text-tech-neon">Go</td>
                  <td className="py-4 px-6 text-white/80">Básico</td>
                  <td className="py-4 px-6 text-white/80 text-center">
                    3 horas
                  </td>
                  <td className="py-4 px-6 text-white/80">Presencial</td>
                  <td className="py-4 px-6 text-white/80">
                    Sistemas de alta performance
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-4 px-6 text-tech-neon">Ruby</td>
                  <td className="py-4 px-6 text-white/80">Básico</td>
                  <td className="py-4 px-6 text-white/80 text-center">
                    3 horas
                  </td>
                  <td className="py-4 px-6 text-white/80">Presencial</td>
                  <td className="py-4 px-6 text-white/80">
                    Desenvolvimento web rápido
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-4 px-6 text-tech-neon">Prolog</td>
                  <td className="py-4 px-6 text-white/80">Básico</td>
                  <td className="py-4 px-6 text-white/80 text-center">
                    3 horas
                  </td>
                  <td className="py-4 px-6 text-white/80">Presencial</td>
                  <td className="py-4 px-6 text-white/80">
                    IA simbólica e lógica computacional
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-code">
              <span className="text-white">Encontrou o curso </span>
              <span className="text-tech-neon neon-text">ideal?</span>
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Inscreva-se agora e garanta sua vaga. As vagas são limitadas!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-tech-neon text-tech-blue hover:bg-tech-neon/80"
            >
              <Link to="/inscricao">Fazer Inscrição</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;
