// eventosData.ts
export interface EventItem {
    id: string;
    time: string;
    endTime: string;
    title: string;
    description: string;
    duration: string;
    location?: string;
    speaker?: string;
  }
  
  export const eventos: Record<string, EventItem[]> = {
    "07/06/2025": [
      {
        id: "1",
        time: "14:00",
        endTime: "15:20",
        title: "Inicio dos Cursos",
        description: "Inicio dos cursos, com apresentação dos patrocinadores e a programação geral.",
        duration: "80 minutos",
        location: "Labins"
      },
      {
        id: "2",
        time: "15:20",
        endTime: "15:30",
        title: "Intervalo",
        description: "Intervalo de 10 minutos, para ir ao banheiro e tomar água.",
        duration: "10 minutos",
        
      },
      {
        id: "3",
        time: "15:30",
        endTime: "16:25",
        title: "Retorno as Salas",
        description: "Retornar ao labin para a conclusão dos cursos.",
        duration: "55 minutos",
        
      },
      {
        id: "4",
        time: "16:25",
        endTime: "17:00",
        title: "Coffee-break",
        description: "Finalização dos cursos com coffee-break para os participantes.",
        duration: "35 minutos",
        
      }
    ]
  };
  