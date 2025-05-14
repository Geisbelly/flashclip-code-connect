
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
  //   name: "InnovateNow",
  //   logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=1374&auto=format&fit=crop",
  //   description: "Start-up focada em soluções inovadoras para desafios tecnológicos.",
  //   tier: "gold",
  //   website: "https://example.com/innovatenow",
  //   socialMedia: {
  //     instagram: "https://instagram.com",
  //     linkedin: "https://linkedin.com",
  //     twitter: "https://twitter.com",
  //   }
  // },
  // {
  //   id: "s4",
  //   name: "DevAcademy",
  //   logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=1374&auto=format&fit=crop",
  //   description: "Instituição educacional especializada em formação de desenvolvedores.",
  //   tier: "silver",
  //   website: "https://example.com/devacademy",
  //   socialMedia: {
  //     facebook: "https://facebook.com",
  //     youtube: "https://youtube.com",
  //     instagram: "https://instagram.com",
  //   }
  // },
  // {
  //   id: "s5",
  //   name: "ByteSystems",
  //   logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=1374&auto=format&fit=crop",
  //   description: "Sistemas integrados e soluções de infraestrutura para empresas.",
  //   tier: "bronze",
  //   website: "https://example.com/bytesystems",
  //   socialMedia: {
  //     linkedin: "https://linkedin.com",
  //     twitter: "https://twitter.com",
  //   }
  // },
  // {
  //   id: "s6",
  //   name: "CloudFusion",
  //   logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=1374&auto=format&fit=crop",
  //   description: "Plataforma de serviços cloud para aplicações de alta demanda.",
  //   tier: "bronze",
  //   website: "https://example.com/cloudfusion",
  //   socialMedia: {
  //     facebook: "https://facebook.com",
  //     linkedin: "https://linkedin.com",
  //   }
  // }
];
