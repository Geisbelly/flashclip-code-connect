
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

export interface ScheduleItemProps {
  id: string;
  title: string;
  courseId: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  isVirtual: boolean;
  instructor: string[];
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  title,
  date,
  startTime,
  endTime,
  location,
  isVirtual,
  instructor
}) => {
  // Format date for display
  const [year, month, day] = date.split('-');
const formattedDate = new Date(Number(year), Number(month) - 1, Number(day)).toLocaleDateString('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
  
  return (
    <Card className="border-white/10 bg-tech-blue-light/30 backdrop-blur-sm hover:border-tech-neon/30 transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-tech-blue-light/50 text-white border-tech-neon/30">
            {formattedDate}
          </Badge>
          <Badge variant={isVirtual ? 'default' : 'secondary'} className={`
            ${isVirtual ? 'bg-tech-neon-green/20 text-tech-neon-green border-tech-neon-green/30' : 
            'bg-tech-neon/20 text-tech-neon border-tech-neon/30'} border
          `}>
            {isVirtual ? 'Virtual' : 'Presencial'}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold mt-3 text-white">{title}</CardTitle>
        <div className='flex flex-row gap-2 mt-2'>
        {instructor.map((inst, index) => (
          <CardDescription key={index} className="text-white/70">
            {inst}{index < instructor.length - 1 ? ',' : ''}
          </CardDescription>
        ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Clock size={16} className="text-tech-neon" />
            <span>{startTime} - {endTime}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <MapPin size={16} className="text-tech-neon" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleItem;
