import { motion } from "framer-motion";

const services = [
  {
    icon: "fas fa-user-tie",
    title: "Personal Branding",
    description: "Build your authentic digital presence with strategic positioning and compelling storytelling.",
    color: "text-yellow-400"
  },
  {
    icon: "fas fa-seedling",
    title: "Organic Growth",
    description: "Sustainable audience building through authentic engagement and value-driven content.",
    color: "text-yellow-400"
  },
  {
    icon: "fas fa-robot",
    title: "AI Automation",
    description: "Intelligent systems that streamline workflows and amplify your productivity.",
    color: "text-yellow-400"
  },
  {
    icon: "fas fa-bullhorn",
    title: "Brand Marketing",
    description: "Strategic campaigns that resonate with your audience and drive meaningful results.",
    color: "text-yellow-400"
  },
  {
    icon: "fas fa-pen-fancy",
    title: "Content Marketing",
    description: "Compelling narratives that educate, inspire, and convert your ideal audience.",
    color: "text-yellow-400"
  },
  {
    icon: "fas fa-share-alt",
    title: "Social Media Marketing",
    description: "Multi-platform strategies that build communities and foster lasting connections.",
    color: "text-yellow-400"
  },
  {
    icon: "fas fa-chart-line",
    title: "Marketing Consulting",
    description: "Strategic guidance to optimize your marketing efforts and maximize ROI.",
    color: "text-yellow-400"
  },
  {
    icon: "fas fa-lightbulb",
    title: "Brand Consulting",
    description: "Expert insights to define and refine your brand identity and positioning.",
    color: "text-yellow-400"
  },
  {
    icon: "fas fa-briefcase",
    title: "Business Consulting",
    description: "Comprehensive business strategy and growth optimization solutions.",
    color: "text-yellow-400"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 scroll-reveal bg-slate-700 relative">
      <div className="corporate-pattern absolute inset-0 opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="corporate-card p-6 rounded-xl hover:border-yellow-500/50 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 corporate-card rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
                <i className={`${service.icon} ${service.color}`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors">{service.title}</h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
