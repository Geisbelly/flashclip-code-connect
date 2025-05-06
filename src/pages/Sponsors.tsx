
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import SponsorCard from '@/components/common/SponsorCard';
import { sponsorsData } from '@/data/sponsors';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Sponsors = () => {
  const diamondSponsors = sponsorsData.filter(sponsor => sponsor.tier === 'diamond');
  const goldSponsors = sponsorsData.filter(sponsor => sponsor.tier === 'gold');
  const silverSponsors = sponsorsData.filter(sponsor => sponsor.tier === 'silver');
  const bronzeSponsors = sponsorsData.filter(sponsor => sponsor.tier === 'bronze');

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
              <span className="text-tech-neon neon-text">Patrocinadores</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Conheça as empresas e organizações que tornam o FlashClip possível. Nossos patrocinadores são fundamentais para a realização deste evento.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sponsors List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Parceiros e Patrocinadores" 
            subtitle="Agradecemos a todas as empresas e instituições que acreditam no nosso projeto e contribuem para o sucesso do FlashClip"
          />
          
          <Tabs defaultValue="all" className="mt-12">
            <TabsList className="bg-tech-blue-light/30 border border-white/10 mx-auto">
              <TabsTrigger value="all" className="data-[state=active]:bg-tech-neon data-[state=active]:text-tech-blue">Todos</TabsTrigger>
              <TabsTrigger value="diamond" className="data-[state=active]:bg-tech-neon data-[state=active]:text-tech-blue">Diamante</TabsTrigger>
              <TabsTrigger value="gold" className="data-[state=active]:bg-tech-neon data-[state=active]:text-tech-blue">Ouro</TabsTrigger>
              <TabsTrigger value="silver" className="data-[state=active]:bg-tech-neon data-[state=active]:text-tech-blue">Prata</TabsTrigger>
              <TabsTrigger value="bronze" className="data-[state=active]:bg-tech-neon data-[state=active]:text-tech-blue">Bronze</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sponsorsData.map((sponsor) => (
                  <SponsorCard key={sponsor.id} sponsor={sponsor} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="diamond" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {diamondSponsors.map((sponsor) => (
                  <SponsorCard key={sponsor.id} sponsor={sponsor} />
                ))}
                {diamondSponsors.length === 0 && (
                  <p className="text-white/70 col-span-3 text-center py-8">Nenhum patrocinador diamante no momento.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="gold" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {goldSponsors.map((sponsor) => (
                  <SponsorCard key={sponsor.id} sponsor={sponsor} />
                ))}
                {goldSponsors.length === 0 && (
                  <p className="text-white/70 col-span-3 text-center py-8">Nenhum patrocinador ouro no momento.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="silver" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {silverSponsors.map((sponsor) => (
                  <SponsorCard key={sponsor.id} sponsor={sponsor} />
                ))}
                {silverSponsors.length === 0 && (
                  <p className="text-white/70 col-span-3 text-center py-8">Nenhum patrocinador prata no momento.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="bronze" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bronzeSponsors.map((sponsor) => (
                  <SponsorCard key={sponsor.id} sponsor={sponsor} />
                ))}
                {bronzeSponsors.length === 0 && (
                  <p className="text-white/70 col-span-3 text-center py-8">Nenhum patrocinador bronze no momento.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Become a Sponsor CTA */}
      <section className="py-20 bg-tech-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-code">
              <span className="text-white">Torne-se um </span>
              <span className="text-tech-neon neon-text">Patrocinador</span>
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Quer que sua empresa ou instituição faça parte do FlashClip? Entre em contato conosco para conhecer nossos planos de patrocínio e os benefícios exclusivos.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
              <p className="text-white font-medium mb-4">
                Entre em contato pelo e-mail:
              </p>
              <a 
                href="mailto:contatoflashclip@gmail.com" 
                className="text-tech-neon text-lg font-code hover:underline"
              >
                contatoflashclip@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Sponsors;
