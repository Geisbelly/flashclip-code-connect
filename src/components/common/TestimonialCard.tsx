
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

export interface TestimonialProps {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: TestimonialProps;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="border-white/10 bg-tech-blue-light/30 backdrop-blur-sm hover:border-tech-neon/30 transition-all">
      <CardHeader className="pb-2 flex flex-row items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-tech-neon/30">
          <img 
            src={testimonial.image || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop"} 
            alt={testimonial.name}
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
          <CardDescription className="text-white/70">{testimonial.role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex mb-3">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={i < testimonial.rating ? "text-tech-neon fill-tech-neon" : "text-white/30"} 
            />
          ))}
        </div>
        <p className="text-white/80 text-sm italic">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
