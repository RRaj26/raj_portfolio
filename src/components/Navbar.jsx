import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-poppins font-bold text-primary">
              Raj Rathod
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-text-secondary hover:text-primary transition-smooth">About</a>
            <a href="#skills" className="text-text-secondary hover:text-primary transition-smooth">Skills</a>
            <a href="#projects" className="text-text-secondary hover:text-primary transition-smooth">Projects</a>
            <a href="#education" className="text-text-secondary hover:text-primary transition-smooth">Education</a>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a href="mailto:rathodraj2612@gmail.com?subject=Job Opportunity - Front-End Developer Position&body=Hi Raj,%0D%0AI'm interested in discussing a front-end developer position with you.%0D%0ABest regards," className="hidden sm:inline-flex btn-primary text-sm">
              Send Mail
            </a>
            
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-smooth" onClick={toggleMenu}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-text-primary mb-1 transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-text-primary mb-1 transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden bg-white border-t border-border shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-3">
          <a href="#about" className="block py-3 px-2 text-text-secondary hover:text-primary hover:bg-primary-50 rounded-lg transition-smooth" onClick={closeMenu}>About</a>
          <a href="#skills" className="block py-3 px-2 text-text-secondary hover:text-primary hover:bg-primary-50 rounded-lg transition-smooth" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="block py-3 px-2 text-text-secondary hover:text-primary hover:bg-primary-50 rounded-lg transition-smooth" onClick={closeMenu}>Projects</a>
          <a href="#education" className="block py-3 px-2 text-text-secondary hover:text-primary hover:bg-primary-50 rounded-lg transition-smooth" onClick={closeMenu}>Education</a>
          <div className="pt-3 border-t border-border">
            <a href="mailto:raj.rathod.dev@gmail.com?subject=Job Opportunity - Front-End Developer Position&body=Hi Raj,%0D%0AI'm interested in discussing a front-end developer position with you.%0D%0ABest regards," className="block btn-primary text-center">
              Send Mail
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;