import { useState } from "react";
import { motion } from "framer-motion";
import logoPath from '@assets/image_1753602507125.png';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  const [robotClicked, setRobotClicked] = useState(false);

  const handleRobotClick = () => {
    setRobotClicked(true);
    // Trigger robot tour modal
    const event = new CustomEvent('startRobotTour');
    window.dispatchEvent(event);
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Corporate Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
      <div className="corporate-grid absolute inset-0 opacity-30"></div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="text-center">
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-28 h-28 mx-auto corporate-card rounded-2xl p-4 animate-elegant-float">
              <img 
                src={logoPath} 
                alt="SNR Automation Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="block text-white mb-2">
              Shaping Stories into
            </span>
            <span className="block gradient-text">
              Scalable Legacy
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            AI-powered digital marketing and personal branding that combines{' '}
            <span className="text-yellow-400 font-semibold">soulful identity</span> with{' '}
            <span className="text-yellow-400 font-semibold">scalable automation</span>
          </motion.p>

          <motion.div 
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              onClick={handleRobotClick}
              className="group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-16 h-16 corporate-card rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                <i className="fas fa-robot text-yellow-400 text-xl"></i>
              </div>
            </motion.button>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button 
              className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Brand Journey
            </motion.button>

            <motion.button 
              className="px-8 py-3 border border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Services
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}