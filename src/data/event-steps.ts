// eventosData.ts
export interface EventItem {
    id: string;
    time: string;
    endTime: string;
    title: string;
    description: string;
    duration: string;
    location: string;
    speaker?: string;
  }
  
  export const eventos: Record<string, EventItem[]> = {
    "15/06/2025": [
      {
        id: "1",
        time: "09:00",
        endTime: "10:00",
        title: "Cerimônia de Abertura",
        description: "Apresentação do evento, patrocinadores e programação geral.",
        duration: "60 minutos",
        location: "Auditório Principal"
      },
      {
        id: "2",
        time: "10:30",
        endTime: "12:00",
        title: "Workshop: Introdução ao Go",
        description: "Primeiros passos com a linguagem Go e seu ecossistema.",
        duration: "90 minutos",
        location: "Sala 101",
        speaker: "Marcos Silveira"
      },
      {
        id: "3",
        time: "10:30",
        endTime: "12:00",
        title: "Palestra: Lógica de Programação com Prolog",
        description: "Fundamentos de programação lógica e aplicações práticas.",
        duration: "90 minutos",
        location: "Sala 102",
        speaker: "Clara Mendes"
      },
      {
        id: "4",
        time: "12:00",
        endTime: "13:30",
        title: "Almoço",
        description: "Intervalo para almoço e networking.",
        duration: "90 minutos",
        location: "Área de Alimentação"
      },
      {
        id: "5",
        time: "13:30",
        endTime: "15:00",
        title: "Workshop: Ruby on Rails na Prática",
        description: "Desenvolvimento de uma aplicação web completa com Ruby on Rails.",
        duration: "90 minutos",
        location: "Sala 103",
        speaker: "Juliana Costa"
      },
      {
        id: "6",
        time: "13:30",
        endTime: "15:00",
        title: "Palestra: TypeScript e o Futuro do JavaScript",
        description: "Como o TypeScript está moldando o desenvolvimento web moderno.",
        duration: "90 minutos",
        location: "Auditório Principal",
        speaker: "Lucas Oliveira"
      },
      {
        id: "7",
        time: "15:30",
        endTime: "17:30",
        title: "Workshop: Microsserviços com C# e .NET Core",
        description: "Construindo arquiteturas escaláveis com tecnologias Microsoft.",
        duration: "120 minutos",
        location: "Sala 104",
        speaker: "Rafael Pereira"
      }
    ],
    "16/06/2025": [
      {
        id: "8",
        time: "15:30",
        endTime: "17:30",
        title: "Workshop: Microsserviços com C# e .NET Core",
        description: "Construindo arquiteturas escaláveis com tecnologias Microsoft.",
        duration: "120 minutos",
        location: "Sala 104",
        speaker: "Rafael Pereira"
      },
      {
        id: "9",
        time: "15:30",
        endTime: "17:30",
        title: "Workshop: Microsserviços com C# e .NET Core",
        description: "Construindo arquiteturas escaláveis com tecnologias Microsoft.",
        duration: "120 minutos",
        location: "Sala 104",
        speaker: "Rafael Pereira"
      }      
    ],
    "17/06/2025": [
      {
        id: "8",
        time: "15:30",
        endTime: "17:30",
        title: "Workshop: Microsserviços com C# e .NET Core",
        description: "Construindo arquiteturas escaláveis com tecnologias Microsoft.",
        duration: "120 minutos",
        location: "Sala 104",
        speaker: "Rafael Pereira"
      },
      {
        id: "9",
        time: "15:30",
        endTime: "17:30",
        title: "Workshop: Microsserviços com C# e .NET Core",
        description: "Construindo arquiteturas escaláveis com tecnologias Microsoft.",
        duration: "120 minutos",
        location: "Sala 104",
        speaker: "Rafael Pereira"
      },
      {
        id: "10",
        time: "15:30",
        endTime: "17:30",
        title: "Workshop: Microsserviços com C# e .NET Core",
        description: "Construindo arquiteturas escaláveis com tecnologias Microsoft.",
        duration: "120 minutos",
        location: "Sala 104",
        speaker: "Rafael Pereira"
      }
           
    ]
  };
  