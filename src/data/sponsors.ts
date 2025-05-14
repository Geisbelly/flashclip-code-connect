
export interface SponsorProps {
  id: string;
  name: string;
  logo: string;
  description: string;
  tier: 'diamond' | 'silver' | 'bronze';
  website?: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export const sponsorsData: SponsorProps[] = [
  {
    id: "s1",
    name: "Axiom",
    logo: "http://flash-clip.vercel.app/patrocinadores/Axiom_1.jpeg",
    description: "Uma loja para criação e venda de artigos 3D! Além de brinquedos, decoração e utilidades.",
    tier: "bronze",
    socialMedia: {}
  },
  {
    id: "s2",
    name: "CicloPalmas",
    logo: "https://dcdn-us.mitiendanube.com/stores/005/037/006/themes/common/logo-958559295-1744309486-dd288b8de47ed140ad3f85883632cee61744309486.png?0",
    description: "A 25 anos entregando aos lojistas peças e acessórios para bicicletas e motos, em todo o estado do Tocantins e Estados vizinhos.",
    tier: "bronze",
    website: "https://ciclopalmas.com.br/",
    socialMedia: {
      facebook: "https://www.facebook.com/Ciclopalmas/",
      instagram: "https://www.instagram.com/ciclopalmas",
    }
  },
  // {
  //   id: "s3",
  //   name: "CRP Tecnologia",
  //   logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=1374&auto=format&fit=crop",
  //   description: "Nossa missão é criar, de forma dinâmica e sustentável, recursos inovadores que tornem as empresas e o mundo cada dia melhor.",
  //   tier: "gold",
  //   website: "https://crptecnologia.com.br/",
  //   socialMedia: {
  //     instagram: "https://www.instagram.com/crptecnologia/",
  //     facebook: "https://www.facebook.com/crptecnologia/?locale=pt_BR"
  //   }
  // },
  // {
  //   id: "s4",
  //   name: "SENAC",
  //   logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=1374&auto=format&fit=crop",
  //   description: "Educar para o trabalho, de forma inovadora e inclusiva, em atividades do comércio de bens, serviços e turismo.",
  //   tier: "silver",
  //   website: "https://www.to.senac.br/",
  //   socialMedia: {
  //     linkedin: "https://linktr.ee/senactocantins",
  //     instagram: "https://www.instagram.com/senactocantins/",
  //   }
  // }
];
