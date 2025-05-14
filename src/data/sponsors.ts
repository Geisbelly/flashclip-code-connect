
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
    {
      id: "s1",
      name: "DevSoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
      description: "Soluções em desenvolvimento e tecnologia educacional.",
      tier: "diamond",
      website: "https://example.com/devsoft",
      socialMedia: {
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: "s2",
      name: "CodeMasters",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/IBM_logo.svg/512px-IBM_logo.svg.png",
      description: "Automação de processos com software de alta performance.",
      tier: "gold",
      website: "https://example.com/codemasters",
      socialMedia: {
        instagram: "https://instagram.com"
      }
    },
    {
      id: "s3",
      name: "InnovaTech",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Meta_Platforms_Logo_white.svg/512px-Meta_Platforms_Logo_white.svg.png",
      description: "Tecnologia para transformação digital de empresas.",
      tier: "silver",
      website: "https://example.com/innovatech",
      socialMedia: {
        facebook: "https://facebook.com"
      }
    }  
];
