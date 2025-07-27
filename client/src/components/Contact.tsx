import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import founderPortrait from "../assets/founder-profile.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "remote",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleLocationToggle = (location: string) => {
    setFormData({
      ...formData,
      location
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch soon to discuss your digital transformation journey.",
    });
    setFormData({ name: "", email: "", location: "remote", message: "" });
  };

  const contactInfo = [
    {
      icon: "fas fa-phone",
      label: "+91 8946084672",
      gradient: "from-purple-400 to-yellow-400"
    },
    {
      icon: "fas fa-envelope",
      label: "rathnadevisn@gmail.com",
      gradient: "from-yellow-400 to-purple-400"
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Karur, Tamil Nadu",
      gradient: "from-purple-400 to-yellow-400"
    },
    {
      icon: "fab fa-instagram",
      label: "@snr_ai_automation",
      gradient: "from-yellow-400 to-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 scroll-reveal">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Transform Your Legacy
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div 
            className="glass-effect p-8 rounded-xl border border-purple-500/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-bold mb-3 gradient-text">Ready to Scale Your Story?</h3>
              <p className="text-gray-400 text-sm">Transform your vision into a scalable digital legacy</p>
              <div className="w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-purple-400 mx-auto mt-3"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 py-3 px-0 text-white placeholder-transparent peer transition-colors"
                  placeholder="Your Name"
                  required
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-yellow-400 peer-focus:text-sm"
                >
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 py-3 px-0 text-white placeholder-transparent peer transition-colors"
                  placeholder="Email Address"
                  required
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-yellow-400 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              
              {/* Service Interest */}
              <div className="mb-6">
                <label className="text-gray-400 text-sm mb-3 block">I'm interested in:</label>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {['Personal Branding', 'AI Automation', 'Content Marketing', 'Brand Consulting'].map((service) => (
                    <button
                      key={service}
                      type="button"
                      className="py-2 px-3 text-xs border border-gray-600 text-gray-300 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Meeting Preference */}
              <div className="mb-6">
                <label className="text-gray-400 text-sm mb-3 block">Preferred Meeting Style:</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => handleLocationToggle('remote')}
                    className={`flex-1 py-3 px-4 border rounded-lg transition-all duration-300 ${
                      formData.location === 'remote'
                        ? 'bg-purple-400 text-white border-purple-400 shadow-lg'
                        : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    <i className="fas fa-video mr-2"></i>
                    Remote
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLocationToggle('karur')}
                    className={`flex-1 py-3 px-4 border rounded-lg transition-all duration-300 ${
                      formData.location === 'karur'
                        ? 'bg-yellow-400 text-black border-yellow-400 shadow-lg'
                        : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                    }`}
                  >
                    <i className="fas fa-handshake mr-2"></i>
                    In-Person
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 py-3 px-0 text-white placeholder-transparent peer resize-none transition-colors"
                  placeholder="Your Message"
                  required
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-yellow-400 peer-focus:text-sm"
                >
                  Tell us about your vision
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-purple-400 text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-rocket mr-3 group-hover:animate-bounce"></i>
                  Start Your Transformation Journey
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </motion.div>
          
          {/* Enhanced Contact Info */}
          <div className="space-y-6">
            <motion.div 
              className="glass-effect p-6 rounded-xl border border-yellow-500/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-playfair font-bold mb-6 text-center gradient-text">Connect With Us</h4>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.icon.includes('phone') ? `tel:${info.label}` : 
                          info.icon.includes('envelope') ? `mailto:${info.label}` :
                          info.icon.includes('instagram') ? `https://instagram.com/${info.label.replace('@', '')}` : '#'}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${info.icon} text-black text-sm`}></i>
                    </div>
                    <div>
                      <span className="text-white group-hover:text-yellow-400 transition-colors font-medium">{info.label}</span>
                      <div className="text-gray-400 text-xs">
                        {info.icon.includes('phone') ? 'Call us anytime' :
                         info.icon.includes('envelope') ? 'Drop us an email' :
                         info.icon.includes('map') ? 'Visit our location' :
                         'Follow our journey'}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Response Promise */}
            <motion.div 
              className="glass-effect p-4 rounded-xl text-center border border-green-500/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-2">
                <i className="fas fa-clock text-green-400 mr-2"></i>
                <span className="text-green-400 font-semibold text-sm">Quick Response Guarantee</span>
              </div>
              <p className="text-gray-300 text-xs">We respond to all inquiries within 24 hours</p>
            </motion.div>
            
            {/* Enhanced Founder Info */}
            <motion.div 
              className="glass-effect p-6 rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-playfair font-bold mb-6 text-gold">Meet the Visionary</h4>
              
              {/* Founder Profile */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img 
                    src={founderPortrait} 
                    alt="S.N. Rathnadevi - Founder" 
                    className="w-24 h-24 rounded-full object-cover border-3 border-gradient-to-r from-yellow-400 to-purple-400 mx-auto shadow-lg" 
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <i className="fas fa-crown text-black text-xs"></i>
                  </div>
                </div>
                <h5 className="text-white font-bold text-lg mt-3">S.N. Rathnadevi</h5>
                <p className="text-yellow-400 font-semibold text-sm">Founder & CEO</p>
                <p className="text-gray-400 text-xs mb-3">SNR AI Automation</p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-purple-400 mx-auto"></div>
              </div>

              {/* Vision Statement */}
              <div className="bg-slate-700/30 p-4 rounded-lg mb-4">
                <p className="text-gray-300 text-sm italic text-center">
                  "Transforming businesses through the perfect blend of 
                  <span className="text-yellow-400 font-semibold"> authentic storytelling</span> and 
                  <span className="text-purple-400 font-semibold"> intelligent automation</span>"
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-slate-700/20 rounded-lg">
                  <div className="text-yellow-400 font-bold text-lg">M.E. Computer Science Engineering</div>
                  <div className="text-gray-400 text-xs">Education</div>
                </div>
                <div className="text-center p-3 bg-slate-700/20 rounded-lg">
                  <div className="text-purple-400 font-bold text-lg">AI Expert</div>
                  <div className="text-gray-400 text-xs">Specialization</div>
                </div>
              </div>

              {/* Connect Button */}
              <a 
                href="https://www.linkedin.com/in/rathnadevisn/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-3 rounded-lg transition-all duration-300 group"
              >
                <i className="fab fa-linkedin text-white text-lg group-hover:scale-110 transition-transform"></i>
                <span className="text-white font-semibold">Connect on LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
