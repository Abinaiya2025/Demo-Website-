import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Divisions",
    links: [
      "SNR Automation",
      "SNR Studio", 
      "SNR Academy",
      "SNR Stack"
    ]
  },
  {
    title: "Services",
    links: [
      "Personal Branding",
      "AI Automation",
      "Content Marketing",
      "Brand Consulting"
    ]
  },
  {
    title: "Connect",
    links: [
      "About",
      "Philosophy",
      "Instagram",
      "Contact"
    ]
  }
];

export default function Footer() {
  const scrollToSection = (sectionName: string) => {
    const sectionId = sectionName.toLowerCase().replace(' ', '-');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-12 glass-effect">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-purple-400 rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-playfair font-bold gradient-text">SNR Automation</span>
            </div>
            <p className="text-gray-400 text-sm">
              Shaping stories into scalable legacy through AI-powered digital excellence.
            </p>
          </motion.div>
          
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => scrollToSection(link)}
                      className="hover:text-yellow-400 transition-colors duration-300 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="border-t border-gray-700 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-2">Copyright 2025 © SNR Automation</p>
          <p className="text-gold text-sm">Powered by SNR AUTOMATIONS</p>
        </motion.div>
      </div>
    </footer>
  );
}
