
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true, 
  className = "mb-10"
}) => {
  return (
    <div className={`${className} ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-code">
        <span className="text-white">{title.split(' ')[0]}</span>
        <span className="text-tech-neon"> {title.split(' ').slice(1).join(' ')}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
