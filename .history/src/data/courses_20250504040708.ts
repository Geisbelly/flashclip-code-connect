
import { CourseProps } from "@/components/common/CourseCard";

export const coursesData: CourseProps[] = [
  {
    id: "prolog",
    title: "Prolog – Lógica computacional e IA simbólica",
    language: "Prolog",
    description: "Introdução à programação lógica e resolução de problemas complexos utilizando a linguagem Prolog.",
    level: "Introdução",
    hours: 3,
    instructor: ["Geisbelly", "Levi Luz", "Maria Antônia", "Bruno"],
    prerequisites: ["Nenhum"]
  },
  {
    id: "csharp",
    title: "Conheça a Liguagem C#",
    language: "C#",
    description: "Aprenda o conceitos básicos de C# em um curso prático.",
    level: "Introdução",
    hours: 3,
    instructor: ["Mota","Arthur A.","David","Sávio","Arthur T.", "Lucas"],
    prerequisites: ["Nenhum"]
  },
  {
    id: "typescript",
    title: "TypeScript – Desenvolvimento front-end moderno",
    language: "TypeScript",
    description: "Explore as melhores práticas de desenvolvimento front-end com TypeScript e frameworks modernos como React.",
    level: "Introdução",
    hours: 3,
    instructor: ["Eduardo S.","Adeulvado","Samuel","Pedro"],
    prerequisites: ["Nenhum"]
  },
  {
    id: "go",
    title: "Go – Programação de alta performance",
    language: "Go",
    description: "Descubra como criar sistemas distribuídos e aplicações de alto desempenho com a linguagem Go.",
    level: "Introdução",
    hours: 3,
    instructor: ["Anne","Victor T.","Pedro","Jonathan","Kauã", "Carlos"],
    prerequisites: ["Nenhum"]
  },
  {
    id: "ruby",
    title: "Ruby – Desenvolvimento web com Ruby on Rails",
    language: "Ruby",
    description: "Crie aplicações web completas e elegantes utilizando Ruby e o framework Rails com produtividade impressionante.",
    level: "Introdução",
    hours: 3,
    instructor: ["Julia","Ítalo","Sergio","Hugo","Regis","Victor da M."],
    prerequisites: ["Nenhum"]
  },
  
];
