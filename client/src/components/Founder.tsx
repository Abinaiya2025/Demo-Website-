import { motion } from "framer-motion";
import founderImage from "../assets/founder-profile.jpg";

export default function Founder() {
  return (
    <section id="about" className="py-20 scroll-reveal bg-slate-800 relative">
      <div className="corporate-pattern absolute inset-0 opacity-15"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:mx-0 corporate-card rounded-2xl overflow-hidden">
                  <img 
                    src={founderImage} 
                    alt="SNR Automation Founder" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjMzM0MTU1Ii8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEzMCIgcj0iNDAiIGZpbGw9IiM2Qjc2OEEiLz4KPHBhdGggZD0iTTEwMCAyNDBDMTAwIDIwMC4yIDEyNi44NjMgMTY4IDE2MCAxNjhDMTkzLjEzNyAxNjggMjIwIDIwMC4yIDIyMCAyNDBIMTAwWiIgZmlsbD0iIzZCNzY4QSIvPgo8L3N2Zz4K';
                    }}
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-10"></div>
              </div>
            </motion.div>

            {/* Founder Content */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white">
                Meet Our <span className="gradient-text">Founder</span>
              </h2>
              
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-2">S.N. Rathnadevi</h3>
                  <p className="text-lg text-yellow-400 font-semibold mb-3">Founder & CEO, SNR AI Automation</p>
                  <p className="text-gray-300 italic mb-4">"Shaping stories into scalable legacy"</p>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Driven by innovation and powered by vision, our founder brings a unique blend of 
                  <span className="text-yellow-400 font-semibold"> technical expertise</span> and 
                  <span className="text-yellow-400 font-semibold"> creative storytelling</span> to transform 
                  how businesses connect with their audiences.
                </p>
                
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <i className="fas fa-graduation-cap text-yellow-400 mr-3"></i>
                    Education
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <div>
                      <p className="font-semibold">M.E. Computer Science Engineering</p>
                      <p className="text-sm">Chettinad College of Engineering & Technology</p>
                    </div>
                    <div>
                      <p className="font-semibold">Bachelor of Computer Science</p>
                      <p className="text-sm">Panimalar Engineering College</p>
                      <p className="text-xs text-gray-400">Aug 2023 - May 2025</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="corporate-card p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <i className="fas fa-lightbulb text-yellow-400"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Innovation</h3>
                        <p className="text-sm text-gray-400">Cutting-edge solutions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="corporate-card p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <i className="fas fa-heart text-yellow-400"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Authenticity</h3>
                        <p className="text-sm text-gray-400">Genuine connections</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="https://www.linkedin.com/in/rathnadevisn/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 corporate-card p-4 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <i className="fab fa-linkedin text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">Connect on LinkedIn</h3>
                      <p className="text-sm text-gray-400">Professional networking & insights</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}