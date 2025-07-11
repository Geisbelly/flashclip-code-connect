
export interface SponsorProps {
  id: string;
  name: string;
  logo: string;
  description?: string;
  tier: 'diamond' | 'silver' | 'bronze';
  website?: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    whatsapp?:string;
  };
}

export const sponsorsData: SponsorProps[] = [
  {
    id: "s1",
    name: "Atacadão dos Preços Baixos",
    logo: "http://flash-clip.vercel.app/patrocinadores/atacadao.png",
    description: "No Atacadão dos Preços Baixos, economia de verdade anda lado a lado com qualidade e confiança. Aqui, você encontra tudo o que precisa para o seu dia a dia com preços que cabem no seu bolso.",
    tier: "diamond",
    website: "https://linktr.ee/Atacadaodosprecosbaixo",
    socialMedia: {
      instagram: "https://www.instagram.com/oatacadaodosprecosbaixos/",
      whatsapp: "https://www.whatsapp.com/channel/0029Vb5llogKmCPZaCp5SG0x"
    }
  },
  {
    id: "s2",
    name: "Axiom",
    logo: "http://flash-clip.vercel.app/patrocinadores/Axiom.png",
    description: "Uma loja para criação e venda de artigos 3D! Além de brinquedos, decoração e utilidades.",
    website: "https://www.instagram.com/_axiom_3d/",
    tier: "silver",
    socialMedia: {
      instagram:"https://www.instagram.com/_axiom_3d/",
    }
  },
  {
    id: "s5",
    name: "ProntoFibra",
    logo: "http://flash-clip.vercel.app/patrocinadores/prontofibra.png",
    description: "Confira nossos planos disponíveis e descubra a melhor opção para suas necessidades. Estamos aqui para proporcionar a você uma experiência personalizada e eficiente!",
    tier: "silver",
    website: "https://prontofibra.com.br/",
    socialMedia: {
      instagram: "https://www.instagram.com/prontofibra/",
    },
  },
  {
    id: "s7",
    name: "CRP Tecnologia",
    logo: "http://flash-clip.vercel.app/patrocinadores/crp.png",
    description: "Nossa missão é criar, de forma dinâmica e sustentável, recursos inovadores que tornem as empresas e o mundo cada dia melhor.",
    tier: "silver",
    website: "https://crptecnologia.com.br/",
    socialMedia: {
      instagram: "https://www.instagram.com/crptecnologia/",
      facebook: "https://www.facebook.com/crptecnologia/?locale=pt_BR"
    }
  },
  {
    id: "s3",
    name: "CicloPalmas",
    logo: "http://flash-clip.vercel.app/patrocinadores/cicloPalmas.png",
    description: "A 25 anos entregando aos lojistas peças e acessórios para bicicletas e motos, em todo o estado do Tocantins e Estados vizinhos.",
    tier: "bronze",
    website: "https://ciclopalmas.com.br/",
    socialMedia: {
      facebook: "https://www.facebook.com/Ciclopalmas/",
      instagram: "https://www.instagram.com/ciclopalmas",
    },
  },
    {
      id: "s4",
      name: "ABIA Corretora de Seguros",
      logo: "http://flash-clip.vercel.app/patrocinadores/abia.png",
      description: "Nossa missão é encontrar o seguro certo a um menor custo e com as melhores condições de pagamento.",
      tier: "bronze",
      website: "https://abiacorretora.com.br/",
      socialMedia: {
        instagram: "https://www.instagram.com/abiacorretoradeseguros/",
      },
    },
    {
      id: "s6",
      name: "IntegreSiS",
      logo: "http://flash-clip.vercel.app/patrocinadores/integresis.png",
      description:"Aqui é o lugar que procura soluções em impressões nos mais diversos formatos e tipos de materiais.",
      tier: "bronze",
      website: "https://www.instagram.com/integresis/",
      socialMedia: {
        instagram: "https://www.instagram.com/integresis/",
        facebook:"https://www.facebook.com/Integresis/?locale=pt_BR"
      },
    },
  {
    id: "s8",
    name: "LC Distribuição",
    logo: "http://flash-clip.vercel.app/patrocinadores/lc.png",
    description: "A LC é um Distribuidor Exclusivo Pão de Queijo CEMAR, em Palmas-TO.",
    tier: "bronze",
    website: "https://www.instagram.com/lcpalmas/",
    socialMedia: {
      instagram: "https://www.instagram.com/lcpalmas/"
    }
  },
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
