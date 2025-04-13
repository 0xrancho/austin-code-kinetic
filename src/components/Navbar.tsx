
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Links', href: '/#links' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Inspiration', href: '/inspiration' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black shadow-lg",
      scrolled ? "py-3" : "py-5"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-space-grotesk font-bold tracking-tight text-white">
          Joel A. Austin
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href.startsWith('/') ? (
                <Link 
                  to={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 font-inter text-sm uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 font-inter text-sm uppercase tracking-wide"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-white/10">
          <div className="container mx-auto px-6 py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="block py-2 text-white/80 hover:text-white transition-colors duration-200 font-inter uppercase tracking-wide"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="block py-2 text-white/80 hover:text-white transition-colors duration-200 font-inter uppercase tracking-wide"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
