import { motion } from "framer-motion";

const divisions = [
  {
    icon: "fas fa-cogs",
    title: "SNR Automation",
    description: "Workflow systems, Zapier bots, AI chat tools, and intelligent automation solutions that scale your operations.",
    gradient: "from-purple-400 to-yellow-400"
  },
  {
    icon: "fas fa-video",
    title: "SNR Studio",
    description: "Video production, editing, post-production, and storytelling design that brings your brand to life.",
    gradient: "from-yellow-400 to-purple-400"
  },
  {
    icon: "fas fa-graduation-cap",
    title: "SNR Academy",
    description: "Courses, webinars, 1-on-1s, and certifications on branding, AI tools, and digital mastery.",
    gradient: "from-white to-purple-400"
  },
  {
    icon: "fas fa-layer-group",
    title: "SNR Stack",
    description: "Digital stack builds, funnel setup, marketing automation, and comprehensive system architecture.",
    gradient: "from-purple-400 to-white"
  }
];

export default function Divisions() {
  return (
    <section id="divisions" className="py-20 scroll-reveal">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Four Powerful Divisions
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              className="glass-effect p-8 rounded-xl hover:scale-105 hover:animate-glow transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${division.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse`}>
                <i className={`${division.icon} text-black text-2xl`}></i>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4 text-gold">{division.title}</h3>
              <p className="text-gray-300 mb-4">{division.description}</p>
              <button className="text-purple-400 hover:text-yellow-400 transition-colors duration-300 group-hover:translate-x-2 transform transition-transform">
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
