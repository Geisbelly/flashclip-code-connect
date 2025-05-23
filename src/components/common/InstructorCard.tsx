import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface InstructorProps {
  id: string;
  name: string;
  role?: string;
  bio: string;
  expertise: string[];
  image: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

interface InstructorCardProps {
  instructor: InstructorProps;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <Card className="flex flex-col overflow-hidden border-white/10 bg-tech-blue-light/30 backdrop-blur-sm hover:border-tech-neon/30 transition-all">
      <div className="relative">
        <div className="w-full h-60 overflow-hidden">
          <img
            src={
              instructor.image
                ? `/integrantes/${instructor.image}.jpg`
                : "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=2400&auto=format&fit=crop"
            }
            alt={instructor.name}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tech-blue to-transparent"></div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <Badge
            variant="outline"
            className="bg-tech-blue-light/80 text-white border-tech-neon/30 backdrop-blur-sm"
          >
            {instructor.expertise}
          </Badge>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <CardHeader className="pb-2 flex-1">
          <CardTitle className="text-xl font-bold text-white">
            {instructor.name}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-white/70">
            {instructor.bio}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-between mt-auto">
          {instructor.social && (
            <div className="flex gap-3">
              {instructor.social.github &&
                instructor.social.github.trim() !== "" && (
                  <SocialLink href={instructor.social.github} icon="github" />
                )}
              {instructor.social.linkedin &&
                instructor.social.linkedin.trim() !== "" && (
                  <SocialLink
                    href={instructor.social.linkedin}
                    icon="linkedin"
                  />
                )}
              {instructor.social.instagram &&
                instructor.social.instagram.trim() !== "" && (
                  <SocialLink
                    href={instructor.social.instagram}
                    icon="instagram"
                  />
                )}
              {/* {instructor.social.twitter && (
            <SocialLink href={instructor.social.twitter} icon="twitter" />
          )} */}
            </div>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: string }) => {
  const iconMap: Record<string, string> = {
    github:
      "M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7C4.73 18.17 4.14 16 4.14 16A2.65 2.65 0 0 0 3 13.97c-.91-.62.07-.6.07-.6a2.11 2.11 0 0 1 1.53 1.03 2.14 2.14 0 0 0 2.91.83 2.16 2.16 0 0 1 .63-1.34c-2.2-.25-4.51-1.1-4.51-4.9a3.89 3.89 0 0 1 1.03-2.71 3.57 3.57 0 0 1 .1-2.64s.83-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.37.83.14 1.87.07 2.64.67.73 1.07 1.7 1.03 2.71 0 3.82-2.34 4.66-4.57 4.9a2.39 2.39 0 0 1 .69 1.85V19c0 .27.16.59.67.5A10 10 0 0 0 10 0z",
    linkedin:
      "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
    twitter:
      "M20 3.8a8.5 8.5 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.2 8.2 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 3.93 3.93 0 0 1-1.1.15 4 4 0 0 1-.77-.07 4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 1 16.4a11.57 11.57 0 0 0 6.29 1.84A11.59 11.59 0 0 0 19 6.6v-.53a8.43 8.43 0 0 0 2-2.13z",
    instagram:
      "M10 0C7.3 0 6.9.01 5.9.05 4.9.09 4.14.23 3.47.49a5.04 5.04 0 0 0-1.8 1.18 5.05 5.05 0 0 0-1.18 1.8c-.26.67-.4 1.43-.44 2.44C.01 6.91 0 7.3 0 10c0 2.7.01 3.1.05 4.1.04 1 .18 1.76.44 2.43a5.05 5.05 0 0 0 1.18 1.8 5.04 5.04 0 0 0 1.8 1.18c.67.26 1.43.4 2.44.44 1 .04 1.4.05 4.1.05 2.7 0 3.1-.01 4.1-.05 1-.04 1.76-.18 2.43-.44a5.04 5.04 0 0 0 1.8-1.18 5.05 5.05 0 0 0 1.18-1.8c.26-.67.4-1.43.44-2.44.04-1 .05-1.4.05-4.1 0-2.7-.01-3.1-.05-4.1-.04-1-.18-1.76-.44-2.43a5.05 5.05 0 0 0-1.18-1.8 5.04 5.04 0 0 0-1.8-1.18c-.67-.26-1.43-.4-2.44-.44C13.1.01 12.7 0 10 0zm0 1.8c2.67 0 2.99.01 4.04.06.97.04 1.5.2 1.86.34.47.18.8.4 1.15.74.34.34.56.68.74 1.15.13.35.3.9.34 1.87.04 1.05.06 1.37.06 4.04 0 2.67-.02 2.99-.06 4.04-.04.97-.2 1.5-.34 1.86a3.25 3.25 0 0 1-.74 1.15 3.25 3.25 0 0 1-1.15.74c-.35.13-.9.3-1.87.34-1.05.04-1.37.06-4.04.06-2.67 0-2.99-.02-4.04-.06-.97-.04-1.5-.2-1.86-.34a3.25 3.25 0 0 1-1.15-.74 3.25 3.25 0 0 1-.74-1.15c-.13-.35-.3-.9-.34-1.87-.04-1.05-.06-1.37-.06-4.04 0-2.67.02-2.99.06-4.04.04-.97.2-1.5.34-1.86.18-.47.4-.8.74-1.15.34-.34.68-.56 1.15-.74.35-.13.9-.3 1.87-.34 1.05-.04 1.37-.06 4.04-.06z M10 13.33a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66zm0-8.46a5.13 5.13 0 1 0 0 10.26 5.13 5.13 0 0 0 0-10.26zm6.54-.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 text-white/70 hover:text-tech-neon hover:border-tech-neon transition-colors"
    >
      <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
        <path d={iconMap[icon]} />
      </svg>
    </a>
  );
};

export default InstructorCard;
