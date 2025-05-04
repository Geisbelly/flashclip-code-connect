
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from 'react-router-dom';

export interface CourseProps {
  id: string;
  title: string;
  language: string;
  description: string;
  level: string;
  hours: number;
  instructor: string;
  prerequisites: string[];
}

interface CourseCardProps {
  course: CourseProps;
  featured?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, featured = false }) => {
  return (
    <Card className={`overflow-hidden border-white/10 bg-tech-blue-light/30 backdrop-blur-sm hover:border-tech-neon/30 transition-all ${
      featured ? 'neon-border' : ''
    }`}>
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-tech-blue-light/50 text-white border-tech-neon/30">
            {course.language}
          </Badge>
          <Badge variant={course.level === 'Iniciante' ? 'default' : 'secondary'} className="bg-tech-neon/20 text-tech-neon border border-tech-neon/30">
            {course.level}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold mt-3 text-white">{course.title}</CardTitle>
        <CardDescription className="text-white/70">{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Clock size={16} className="text-tech-neon" />
            <span>{course.hours} horas de curso</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <User size={16} className="text-tech-neon" />
           {course.instructor.localeCompare((req, index)=>(
            <Badge key={index} variant="outline" className="text-xs bg-tech-blue border-white/10">
              {req}
              </Badge>))}
          </div>
          {course.prerequisites.length > 0 && (
            <div className="pt-3">
              <p className="text-xs text-white/50 mb-2">Pré-requisitos:</p>
              <div className="flex flex-wrap gap-1">
                {course.prerequisites.map((req, index) => (
                  <Badge key={index} variant="outline" className="text-xs bg-tech-blue border-white/10">
                    {req}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full border-tech-neon text-tech-neon hover:bg-tech-neon hover:text-tech-blue">
          <Link to={`/cursos/${course.id}`}>Ver Detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
