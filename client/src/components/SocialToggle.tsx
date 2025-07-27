import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: 'fab fa-whatsapp',
    color: 'text-green-400',
    bgColor: 'bg-green-500',
    url: 'https://wa.me/1234567890', // Replace with actual WhatsApp number
  },
  {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500',
    url: 'https://instagram.com/snrautomation', // Replace with actual Instagram
  },
  {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500',
    url: 'https://linkedin.com/company/snrautomation', // Replace with actual LinkedIn
  },
];

export default function SocialToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Social Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-16 right-0 space-y-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 corporate-card p-3 rounded-lg hover:${social.bgColor}/20 transition-all duration-300 group`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-10 h-10 ${social.bgColor} rounded-lg flex items-center justify-center`}>
                    <i className={`${social.icon} text-white text-lg`}></i>
                  </div>
                  <span className="text-white font-medium whitespace-nowrap">{social.name}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-share-alt'} text-black text-lg`}></i>
        </motion.button>
      </div>
    </div>
  );
}