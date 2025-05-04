
import { CourseProps } from "@/components/common/CourseCard";

export const coursesData: CourseProps[] = [
  {
    id: "csharp",
    title: "C# – Desenvolvimento de aplicações desktop",
    language: "C#",
    description: "Aprenda a desenvolver aplicações desktop poderosas e eficientes utilizando C# e o ecossistema .NET.",
    level: "Introdução",
    hours: 3,
    instructor: "Ana Silva",
    prerequisites: ["Lógica de Programação", "Conceitos básicos de POO"]
  },
  {
    id: "typescript",
    title: "TypeScript – Desenvolvimento front-end moderno",
    language: "TypeScript",
    description: "Explore as melhores práticas de desenvolvimento front-end com TypeScript e frameworks modernos como React.",
    level: "Introdução",
    hours: 3,
    instructor: "Pedro Santos",
    prerequisites: ["JavaScript básico", "HTML/CSS"]
  },
  {
    id: "go",
    title: "Go – Programação de alta performance",
    language: "Go",
    description: "Descubra como criar sistemas distribuídos e aplicações de alto desempenho com a linguagem Go.",
    level: "Introdução",
    hours: 3,
    instructor: "Marcos Oliveira",
    prerequisites: ["Programação em qualquer linguagem"]
  },
  {
    id: "ruby",
    title: "Ruby – Desenvolvimento web com Ruby on Rails",
    language: "Ruby",
    description: "Crie aplicações web completas e elegantes utilizando Ruby e o framework Rails com produtividade impressionante.",
    level: "Introdução",
    hours: 3,
    instructor: "Camila Ferreira",
    prerequisites: ["Nenhum"]
  },
  {
    id: "prolog",
    title: "Prolog – Lógica computacional e IA simbólica",
    language: "Prolog",
    description: "Introdução à programação lógica e resolução de problemas complexos utilizando a linguagem Prolog.",
    level: "Introdução",
    hours: 3,
    instructor: "Rafael Mendes",
    prerequisites: ["Nenhum"]
  }
];
