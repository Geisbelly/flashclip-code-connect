
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
    prerequisites: ["Nenhum"]
  },
  {
    id: "csharp",
    title: "C# do zero: escrevendo seus primeiros comandos",
    language: "C#",
    description: "Aprenda o essencial para começar a programar com C#. Ideal pra quem nunca encostou na linguagem ou quer uma introdução sem complicação.",
    level: "Introdução",
    hours: 3,
    instructor: ["Mota", "Arthur A.", "David", "Sávio", "Arthur T.", "Lucas"],
    prerequisites: ["Nenhum"]
  },
  {
    id: "typescript",
    title: "TypeScript sem mistério",
    language: "TypeScript",
    description: "Vamos conhecer os conceitos básicos do TypeScript e entender como ele dá uma força pro JavaScript com segurança e organização.",
    level: "Introdução",
    hours: 3,
    instructor: ["Eduardo S.", "Adeulvado", "Samuel", "Pedro"],
    prerequisites: ["Nenhum"]
  },
  {
    id: "go",
    title: "Primeiros códigos com Go",
    language: "Go",
    description: "Um passeio pelo básico da linguagem Go. Vamos ver como ela funciona e por que é tão amada por quem curte performance sem dor de cabeça.",
    level: "Introdução",
    hours: 3,
    instructor: ["Anne", "Victor T.", "Pedro", "Jonathan", "Kauã", "Carlos"],
    prerequisites: ["Nenhum"]
  },
  {
    id: "ruby",
    title: "Ruby: sua primeira web app",
    language: "Ruby",
    description: "Comece sua jornada no desenvolvimento web com Ruby e Rails. Tudo explicado passo a passo, sem pressa, sem sustos.",
    level: "Introdução",
    hours: 3,
    instructor: ["Julia", "Ítalo", "Sergio", "Hugo", "Regis", "Victor da M."],
    prerequisites: ["Nenhum"]
  }
];
