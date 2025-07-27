import { motion } from "framer-motion";

const philosophyItems = [
  {
    icon: "fas fa-heart",
    title: "Aura = Who You Are",
    description: "Your authentic essence, values, and unique perspective that defines your digital soul.",
    delay: 0.2
  },
  {
    icon: "fas fa-expand-arrows-alt",
    title: "Orbit = How Far You Go",
    description: "The reach and impact of your influence, powered by intelligent automation and strategic scaling.",
    delay: 0.4
  },
  {
    icon: "fas fa-infinity",
    title: "AURBI = Scaled Identity",
    description: "The perfect fusion of soul and system, creating sustainable legacy through intelligent automation.",
    delay: 0.6
  }
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 relative overflow-hidden scroll-reveal">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-purple-900/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair font-bold mb-8 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Philosophy
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="scroll-reveal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <i className={`${item.icon} text-black text-2xl`}></i>
              </motion.div>
              <h3 className="text-xl font-playfair font-bold mb-4 text-gold">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-yellow-400 text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            Let Us Build Your Digital Soul
          </button>
        </motion.div>
      </div>
    </section>
  );
}
