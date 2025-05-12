// src/components/EventFlow.tsx

import React from "react";
import { Clock, MapPin, User } from "lucide-react";
import { EventItem } from "@/data/event-steps";

interface ProgramacaoProps {
  eventos: Record<string, EventItem[]>;
}

const Programacao: React.FC<ProgramacaoProps> = ({ eventos }) => {
  const datas = Object.keys(eventos);

  return (
    <div className="space-y-8 mt-4 ">
      {datas.map((data) => {
        const lista = eventos[data]; // Para cada data, pegamos os eventos correspondentes

        return (
          <div key={data}>
            {/* Seção para exibir a data */}
            <div className="flex items-center gap-4 mb-6">
              <hr className="flex-1 border " style={{ borderColor: "rgb(8, 194, 238)" }}/>
              <div className="text-[#FFFFF] font-semibold border px-6 py-2 rounded-md text-lg text-center whitespace-nowrap shadow-md" style={{backgroundColor: "rgba(59, 131, 246, 0.05)", borderColor: "rgba(184, 184, 184, 0.13)"}}>
                {data.charAt(0).toUpperCase() + data.slice(1)}
              </div>
              <hr className="flex-1 border " style={{ borderColor: "rgb(8, 194, 238)" }}/>
            </div>

            {/* Mapeia e exibe os eventos */}
            {lista.map((evento) => (
              <div key={evento.id} className="flex gap-4 relative mb-6"> 
                <div className="flex flex-col items-center w-20">
                  <div
                    className="bg-[#12192a] border text-white rounded-full w-12 h-12 flex items-center justify-center font-light"
                    style={{ borderColor: "rgb(8, 194, 238)" }}
                  >
                    {evento.time}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{evento.duration}</div>
                </div>

                <div className="relative flex-1">
                  <div
                    className="bg-[#121f36] border-l-2 rounded-lg p-4 shadow-md"
                    style={{
                      borderColor: "rgb(8, 194, 238)",
                      backgroundColor: "rgba(59, 131, 246, 0.05)",
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{evento.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{evento.description}</p>

                    <div className="flex items-center gap-1 text-xs mb-2">
                      <Clock className="h-3 w-3" style={{ color: "rgb(8, 194, 238)" }} />
                      <span className="text-gray-400">
                        {evento.time} - {evento.endTime} ({evento.duration})
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <MapPin className="h-3 w-3" style={{ color: "rgb(8, 194, 238)" }} />
                      <span>{evento.location}</span>
                    </div>

                    {evento.speaker && (
                      <div className="flex items-center gap-1 text-gray-400 text-xs mt-2">
                        <User className="h-3 w-3" style={{ color: "rgb(8, 194, 238)" }} />
                        <span>{evento.speaker}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Programacao;