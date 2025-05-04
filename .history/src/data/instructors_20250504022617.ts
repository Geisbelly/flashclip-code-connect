
import { InstructorProps } from "@/components/common/InstructorCard";

export const instructorsData: InstructorProps[] = [
  {
    id: "geisbelly",
    name: "Geisbelly",
    role: "Especialista em C# e .NET",
    bio: "Ana tem mais de 8 anos de experiência em desenvolvimento de aplicações empresariais usando C# e o ecossistema .NET.",
    expertise: ["C#", ".NET Core", "WPF", "Entity Framework"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1488&auto=format&fit=crop",
    social: {
      github: "https://github.com/geisbelly",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "levi-luz",
    name: "Levi Luz",
    role: "Desenvolvedor Front-end",
    bio: "Especialista em desenvolvimento web front-end, com foco em TypeScript, React e arquiteturas modernas.",
    expertise: ["TypeScript", "React", "Next.js", "UI/UX"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "maria-antonia",
    name: "Maria Antônia",
    role: "Engenheiro de Software",
    bio: "Especialista em sistemas distribuídos e computação de alta performance, com foco na linguagem Go.", 
    expertise: ["Go", "Microserviços", "Docker", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "bruno",
    name: "Bruno",
    role: "Desenvolvedora Ruby",
    bio: "Desenvolvedora web full-stack com especialização em Ruby on Rails e desenvolvimento ágil.",
    expertise: ["Ruby", "Rails", "TDD", "Agile"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1561&auto=format&fit=crop",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
];
