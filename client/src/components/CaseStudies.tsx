import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Tech Startup Transformation",
    description: "Automated lead generation increased conversions by 300% in 6 months",
    beforeMetric: "100 leads/month",
    afterMetric: "400 leads/month",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    category: "automation"
  },
  {
    title: "Entrepreneur Brand Growth",
    description: "Personal brand automation grew followers by 500% and revenue by 250%",
    beforeMetric: "2K followers",
    afterMetric: "12K followers",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    category: "branding"
  },
  {
    title: "E-commerce Automation",
    description: "Complete workflow automation saved 40 hours/week and doubled sales",
    beforeMetric: "Manual processes",
    afterMetric: "95% automated",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    category: "automation"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 scroll-reveal">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-playfair font-bold mb-2 text-gold group-hover:text-yellow-300 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                  {study.description}
                </p>
                <div className="flex justify-between text-xs text-purple-400">
                  <span>Before: {study.beforeMetric}</span>
                  <span>After: {study.afterMetric}</span>
                </div>
                <div className="mt-4 flex items-center text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">View Details</span>
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
