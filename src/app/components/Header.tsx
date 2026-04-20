import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-emerald-400 tracking-wider"
          >
            {'<Developer />'}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Hire Me
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-emerald-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white w-full"
              >
                Hire Me
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}