
export interface SponsorProps {
  id: string;
  name: string;
  logo: string;
  description: string;
  tier: 'diamond' | 'gold' | 'silver' | 'bronze';
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
  //{
  //   id: "s1",
  //   name: "TechCorp",
  //   logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=1374&auto=format&fit=crop",
  //   description: "Empresa líder em soluções tecnológicas para o mercado corporativo.",
  //   tier: "diamond",
  //   website: "https://example.com/techcorp",
  //   socialMedia: {
  //     facebook: "https://facebook.com",
  //     twitter: "https://twitter.com",
  //     instagram: "https://instagram.com",
  //     linkedin: "https://linkedin.com",
  //   }
  // },
  // {
  //   id: "s2",
  //   name: "CodeMasters",
  //   logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=1374&auto=format&fit=crop",
  //   description: "Desenvolvedores de software especializados em automação de processos.",
  //   tier: "gold",
  //   website: "https://example.com/codemasters",
  //   socialMedia: {
  //     facebook: "https://facebook.com",
  //     linkedin: "https://linkedin.com",
  //     youtube: "https://youtube.com",
  //   }
  // },
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
