import { useState } from "react";
import logoPath from '@assets/image_1753602507125.png';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 corporate-glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 corporate-card rounded-lg p-2">
              <img 
                src={logoPath} 
                alt="SNR Automation Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-playfair font-bold text-white">SNR Automation</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('philosophy')} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Philosophy
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Contact
            </button>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200">
              About
            </button>
            <button onClick={() => scrollToSection('philosophy')} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200">
              Philosophy
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
