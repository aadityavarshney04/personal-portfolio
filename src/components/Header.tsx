
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled to add background effect
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      const sections = navItems.map(item => item.href.substring(1));
      
      // Find the current section based on scroll position
      const current = sections.reduce((current, section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view or we've scrolled past it but not into the next one fully
          if (rect.top <= 100 && rect.bottom > 0) {
            return section;
          }
        }
        return current;
      }, activeSection);
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Aaditya<span className="text-amber-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 font-medium ${
                activeSection === item.href.substring(1)
                  ? 'text-amber-400'
                  : 'text-gray-300 hover:text-amber-400'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:bg-gray-800/50"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 md:hidden shadow-lg backdrop-blur-md border-b border-gray-800 animate-fade-in">
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`py-3 px-4 text-center rounded-md transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gray-800/60 text-amber-400 font-medium'
                      : 'text-gray-300 hover:bg-gray-800/30 hover:text-amber-400'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
