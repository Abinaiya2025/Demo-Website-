import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RobotTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  const tourSteps = [
    {
      title: "Welcome to SNR Automation!",
      message: "Hi! I'm your AI guide. Let me show you how we transform stories into scalable legacies through the power of automation and soulful branding.",
      action: "Start Tour"
    },
    {
      title: "Our Digital Arsenal",
      message: "First, let's explore our orbital tools showcase. These are the cutting-edge technologies we use to automate and scale your brand.",
      action: "Next"
    },
    {
      title: "Four Powerful Divisions",
      message: "We operate through four specialized divisions: Automation, Studio, Academy, and Stack - each designed to serve different aspects of your digital transformation.",
      action: "Continue"
    },
    {
      title: "Philosophy of Growth",
      message: "Our unique approach combines your authentic Aura with strategic Orbit to create AURBI - your scaled digital identity.",
      action: "Finish Tour"
    }
  ];

  useEffect(() => {
    const handleStartTour = () => {
      setIsOpen(true);
      setTourStep(0);
    };

    window.addEventListener('startRobotTour', handleStartTour);
    return () => window.removeEventListener('startRobotTour', handleStartTour);
  }, []);

  const handleTourAction = () => {
    if (tourStep < tourSteps.length - 1) {
      setTourStep(tourStep + 1);
      // Scroll to relevant section
      const sections = ['orbital-tools', 'divisions', 'philosophy'];
      if (tourStep < sections.length) {
        setTimeout(() => {
          const element = document.getElementById(sections[tourStep]);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 500);
      }
    } else {
      setIsOpen(false);
      setTourStep(0);
    }
  };

  const closeTour = () => {
    setIsOpen(false);
    setTourStep(0);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-effect p-8 rounded-xl max-w-md mx-4 relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            <div className="text-center">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <i className="fas fa-robot text-white text-xl"></i>
              </motion.div>
              
              <h3 className="text-xl font-playfair font-bold mb-4 text-gold">
                {tourSteps[tourStep].title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {tourSteps[tourStep].message}
              </p>
              
              <div className="flex space-x-4">
                <button
                  onClick={handleTourAction}
                  className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:scale-105 transition-transform duration-300 font-semibold"
                >
                  {tourSteps[tourStep].action}
                </button>
                <button
                  onClick={closeTour}
                  className="px-6 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  {tourStep === 0 ? "Maybe Later" : "Skip Tour"}
                </button>
              </div>
              
              {/* Progress indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {tourSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === tourStep ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Voice indicator */}
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <i className="fas fa-volume-up text-black text-xs"></i>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
