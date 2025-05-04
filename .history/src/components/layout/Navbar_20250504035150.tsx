
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar, Star, User, Video } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-tech-blue/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#ffffff] rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div >
                <a href="/">
                  <img src="/logo.png" alt="Logo"  />
                </a>
              </div>
            </div>
            <span className="font-code font-bold text-white text-xl tracking-tight">
              Flash<span className="text-tech-neon">Clip</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cursos">Cursos</NavLink>
            <NavLink to="/programacao">Programação</NavLink>
            <NavLink to="/instrutores">Instrutores</NavLink>
            <NavLink to="/patrocinadores">Patrocinadores</NavLink>
            <NavLink to="/contato">Contato</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden sm:flex border-tech-neon text-tech-neon hover:bg-tech-neon hover:text-tech-blue">
              <Link to="/inscricao">Inscreva-se</Link>
            </Button>
            
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to}
    className="px-3 py-2 text-sm font-medium text-white/70 hover:text-tech-neon transition-colors"
  >
    {children}
  </Link>
);

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-neon"
      >
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 p-4 bg-tech-blue-light/95 backdrop-blur-md shadow-lg">
          <div className="flex flex-col space-y-2">
            <MobileNavLink to="/" icon={<div>{"{}"}</div>}>Home</MobileNavLink>
            <MobileNavLink to="/sobre" icon={<Star size={18} />}>Sobre</MobileNavLink>
            <MobileNavLink to="/cursos" icon={<Video size={18} />}>Cursos</MobileNavLink>
            <MobileNavLink to="/programacao" icon={<Calendar size={18} />}>Programação</MobileNavLink>
            <MobileNavLink to="/instrutores" icon={<User size={18} />}>Instrutores</MobileNavLink>
            <MobileNavLink to="/patrocinadores" icon={<div>$</div>}>Patrocinadores</MobileNavLink>
            <MobileNavLink to="/faq" icon={<div>?</div>}>FAQ</MobileNavLink>
            <MobileNavLink to="/contato" icon={<div>@</div>}>Contato</MobileNavLink>
            <Button asChild variant="outline" className="w-full mt-4 border-tech-neon text-tech-neon hover:bg-tech-neon hover:text-tech-blue">
              <Link to="/inscricao">Inscreva-se</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavLink = ({ to, icon, children }: { to: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <Link 
    to={to}
    className="flex items-center gap-2 px-4 py-2 text-white/90 hover:text-tech-neon hover:bg-white/5 rounded-md transition-colors"
    onClick={() => {}}
  >
    <span className="text-tech-neon">{icon}</span>
    <span>{children}</span>
  </Link>
);

export default Navbar;
