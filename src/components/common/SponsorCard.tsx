
//import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { SponsorProps } from '@/data/sponsors';
import { Button } from '../ui/button';

interface SponsorCardProps {
  sponsor: SponsorProps;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor }) => {
  const tierColors = {
    diamond: "border-tech-neon neon-border",
    gold: "border-yellow-400",
    silver: "border-gray-300",
    bronze: "border-amber-500",
  };

  return (
    <Card className={`bg-tech-blue-light/30 backdrop-blur-sm border-2 ${tierColors[sponsor.tier]} hover:shadow-lg transition-all duration-300`}>
      <CardHeader>
        <div className="h-[200px] w-full overflow-hidden rounded-lg mb-4">
          <img 
            src={sponsor.logo} 
            alt={`${sponsor.name} logo`}
            className="w-full h-full  object-center"
          />
        </div>
        <CardTitle className="text-white text-xl font-code">
          {sponsor.name}
        </CardTitle>
        {sponsor.tier === 'diamond' && (
          <span className="inline-block px-2 py-1 bg-tech-neon text-tech-blue text-xs font-semibold rounded-full animate-pulse-glow">
            Patrocinador Diamante
          </span>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white/80 mb-4">
          {sponsor.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex space-x-2">
          {sponsor.socialMedia.facebook && (
            <a href={sponsor.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-tech-neon transition-colors">
              <Facebook size={18} />
            </a>
          )}
          {sponsor.socialMedia.twitter && (
            <a href={sponsor.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-tech-neon transition-colors">
              <Twitter size={18} />
            </a>
          )}
          {sponsor.socialMedia.instagram && (
            <a href={sponsor.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-tech-neon transition-colors">
              <Instagram size={18} />
            </a>
          )}
          {sponsor.socialMedia.linkedin && (
            <a href={sponsor.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-tech-neon transition-colors">
              <Linkedin size={18} />
            </a>
          )}
          {sponsor.socialMedia.youtube && (
            <a href={sponsor.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-tech-neon transition-colors">
              <Youtube size={18} />
            </a>
          )}
        </div>
        {sponsor.website && (
          <Button variant="outline" size="sm" asChild className="border-tech-neon text-tech-neon hover:bg-tech-neon/10">
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              Visitar
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default SponsorCard;
