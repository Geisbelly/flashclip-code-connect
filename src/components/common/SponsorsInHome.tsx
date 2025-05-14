import React from "react";
import { sponsorsData } from "@/data/sponsors";

const SponsorsInHome = () => {
  return (
    <section className="py-16 bg-tech-blue-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12 font-code">
          <span className="text-white">Nossos </span>
          <span className="text-tech-neon neon-text">Patrocinadores</span>
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {sponsorsData.filter((sponsor) => sponsor.tier === "silver" || sponsor.tier === "diamond")
            .map((sponsor) => (
                <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-transform duration-300 hover:scale-105"
                >
              <div className="rounded-full h-20 w-20 bg-tech-blue-light/30 backdrop-blur-sm flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_20px_5px_rgba(0,210,255,0.7)]">
                <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    title={sponsor.name}
                    className="max-h-12 max-w-12 object-contain"
                />
                </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsInHome;