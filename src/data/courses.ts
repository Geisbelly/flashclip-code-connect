
import { CourseProps } from "@/components/common/CourseCard";

export const coursesData: CourseProps[] = [
  {
    id: "prolog",
    title: "Desvendando a lógica com Prolog",
    language: "Prolog",
    description: "Uma introdução leve e curiosa ao universo da programação lógica. Vamos explorar o básico de Prolog e entender como pensar como um computador lógico.",
    level: "Introdução",
    hours: 3,
    instructor: ["Geisbelly", "Levi Luz", "Maria Antônia", "Bruno"],
    prerequisites: ["Nenhum"],
    sala: 'Sala 710',
    labin: 'Labin 5'
  },
  {
    id: "csharp",
    title: "C# do zero: escrevendo seus primeiros comandos",
    language: "C#",
    description: "Aprenda o essencial para começar a programar com C#. Ideal pra quem nunca encostou na linguagem ou quer uma introdução sem complicação.",
    level: "Introdução",
    hours: 3,
    instructor: ["Mota", "Arthur A.", "David", "Sávio", "Arthur T.", "Lucas"],
    prerequisites: ["Nenhum"],
    sala: 'Sala 712',
    labin: 'Labin 6'
  },
  {
    id: "typescript",
    title: "TypeScript sem mistério",
    language: "TypeScript",
    description: "Vamos conhecer os conceitos básicos do TypeScript e entender como ele dá uma força pro JavaScript com segurança e organização.",
    level: "Introdução",
    hours: 3,
    instructor: ["Eduardo S.", "Adeulvado", "Samuel", "Pedro"],
    prerequisites: ["Nenhum"],
    sala: 'Sala 702',
    labin: 'Labin 2'
  },
  {
    id: "go",
    title: "Primeiros códigos com Go",
    language: "Go",
    description: "Um passeio pelo básico da linguagem Go. Vamos ver como ela funciona e por que é tão amada por quem curte performance sem dor de cabeça.",
    level: "Introdução",
    hours: 3,
    instructor: ["Anne", "Victor T.", "Pedro", "Jonathan", "Kauã", "Carlos"],
    prerequisites: ["Nenhum"],
    sala: 'Sala 703',
    labin: 'Labin 1'
  },
  {
    id: "ruby",
    title: "Ruby em Ação: Programação Descomplicada para Mentes Curiosas",
    language: "Ruby",
    description: "Neste minicurso, você aprenderá os fundamentos da programação de forma leve e prática usando a linguagem Ruby. A proposta é construir, passo a passo, um jogo interativo, enquanto explora conceitos essenciais como variáveis, condicionais, loops e entrada de dados.",
    level: "Introdução",
    hours: 3,
    instructor: ["Julia", "Ítalo", "Sergio", "Hugo", "Regis", "Victor da M."],
    prerequisites: ["Nenhum"],
    sala: 'Sala 719',
    labin: 'Labin 11'
  }
];
