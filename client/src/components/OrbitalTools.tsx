import { useState } from "react";
import { motion } from "framer-motion";

const tools = [
  // Core Development Tools
  { icon: "fab fa-react", name: "React", category: "development", description: "Frontend Development", color: "#60A5FA" },
  { icon: "fas fa-gamepad", name: "Gaming", category: "creative", description: "Game Development", color: "#8B5CF6" },
  { icon: "fas fa-paint-brush", name: "Design", category: "creative", description: "Creative Design", color: "#F472B6" },
  { icon: "fas fa-video", name: "Video", category: "creative", description: "Video Production", color: "#8B5CF6" },
  { icon: "fas fa-magic", name: "Effects", category: "creative", description: "Visual Effects", color: "#EC4899" },
  { icon: "fas fa-rocket", name: "Launch", category: "marketing", description: "Project Launch", color: "#F97316" },
  { icon: "fas fa-globe", name: "Global", category: "marketing", description: "Global Reach", color: "#06B6D4" },
  { icon: "fas fa-bullseye", name: "Target", category: "marketing", description: "Marketing Goals", color: "#EF4444" },

  // Testing and QA Tools
  { icon: "fas fa-vial", name: "LambdaTest", category: "testing", description: "Cross-browser Testing", color: "#9333EA" },
  { icon: "fas fa-robot", name: "KaneAI", category: "testing", description: "AI-Powered Testing", color: "#7C3AED" },
  { icon: "fas fa-water", name: "AquaALM", category: "testing", description: "Application Lifecycle Management", color: "#0EA5E9" },
  { icon: "fas fa-shield-alt", name: "Parasoft", category: "testing", description: "Software Testing Solutions", color: "#059669" },
  { icon: "fas fa-search", name: "Ranorex", category: "testing", description: "Test Automation", color: "#DC2626" },
  { icon: "fas fa-tachometer-alt", name: "ACCELQ", category: "testing", description: "Codeless Test Automation", color: "#7C2D12" },
  { icon: "fas fa-balance-scale", name: "iHarmony", category: "testing", description: "Test Management", color: "#1E40AF" },
  { icon: "fas fa-forward", name: "Appvance", category: "testing", description: "AI-Driven Testing", color: "#BE185D" },
  { icon: "fas fa-play-circle", name: "Katalon", category: "testing", description: "Test Automation Platform", color: "#0891B2" },
  { icon: "fas fa-lightbulb", name: "Promptitude.io", category: "testing", description: "Prompt Management", color: "#EC4899" },
  { icon: "fas fa-cog", name: "Functionize", category: "testing", description: "Intelligent Test Automation", color: "#7C3AED" },
  { icon: "fas fa-code", name: "Code Intelligence", category: "testing", description: "Fuzzing & Security Testing", color: "#059669" },
  { icon: "fas fa-file-alt", name: "OpenText", category: "testing", description: "Enterprise Testing", color: "#DC2626" },
  { icon: "fas fa-microscope", name: "Tricentis Tosca", category: "testing", description: "Continuous Testing", color: "#0891B2" },
  { icon: "fas fa-brain", name: "Testers.ai", category: "testing", description: "AI Testing Platform", color: "#7C2D12" },
  { icon: "fas fa-key", name: "Opkey", category: "testing", description: "No-Code Test Automation", color: "#BE185D" },
  { icon: "fas fa-briefcase", name: "Worksoft", category: "testing", description: "Enterprise Automation", color: "#1E40AF" },

  // Automation & AI Tools
  { icon: "fas fa-route", name: "UiPath", category: "automation", description: "Robotic Process Automation", color: "#F59E0B" },
  { icon: "fas fa-comments", name: "Moveworks", category: "automation", description: "AI Employee Support", color: "#8B5CF6" },
  { icon: "fas fa-link", name: "Zapier", category: "automation", description: "Workflow Automation", color: "#F97316" },
  { icon: "fas fa-brain", name: "Notion AI", category: "automation", description: "AI-Powered Workspace", color: "#6366F1" },
  { icon: "fas fa-spell-check", name: "Grammarly", category: "automation", description: "AI Writing Assistant", color: "#10B981" },
  { icon: "fas fa-microphone", name: "Fireflies.ai", category: "automation", description: "AI Meeting Assistant", color: "#EF4444" },
  { icon: "fas fa-tasks", name: "Taskade", category: "automation", description: "AI Project Management", color: "#06B6D4" },
  { icon: "fas fa-chart-bar", name: "Data Squirrel", category: "automation", description: "Data Analytics", color: "#3B82F6" },
  { icon: "fas fa-bolt", name: "Performance", category: "automation", description: "Speed Optimization", color: "#F59E0B" },
  { icon: "fas fa-chart-line", name: "Analytics", category: "automation", description: "Data Analytics", color: "#10B981" },
  { icon: "fas fa-cogs", name: "Automation", category: "automation", description: "Process Automation", color: "#6366F1" },
  { icon: "fas fa-calculator", name: "Calculator", category: "automation", description: "Data Processing", color: "#3B82F6" }
];

export default function OrbitalTools() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Tools", gradient: "from-white to-gray-300" },
    { id: "automation", name: "Automation Tools", gradient: "from-purple-400 to-pink-400" },
    { id: "creative", name: "Creative Tools", gradient: "from-yellow-400 to-orange-400" },
    { id: "marketing", name: "Marketing Tools", gradient: "from-blue-400 to-cyan-400" },
    { id: "testing", name: "Testing Tools", gradient: "from-green-400 to-blue-400" },
    { id: "development", name: "Development Tools", gradient: "from-indigo-400 to-purple-400" },
  ];

  // Filter tools based on active category  
  const filteredTools = activeCategory === "all" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section id="orbital-tools" className="py-16 scroll-reveal bg-slate-800 relative">
      <div className="corporate-pattern absolute inset-0 opacity-20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-white">
            Our Technology Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional tools and technologies that power our digital solutions
          </p>
        </motion.div>

        {/* Clean Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id 
                  ? 'bg-yellow-500 text-black' 
                  : 'corporate-card text-gray-300 border border-yellow-500/30 hover:border-yellow-500 hover:text-yellow-400'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* SNR Orbital Design with Continuous Animation */}
        <div className="relative w-96 h-96 mx-auto mb-12">
          {/* Central SNR Logo */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center z-20 shadow-2xl"
            whileHover={{ scale: 1.1 }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(234, 179, 8, 0.3)",
                "0 0 40px rgba(234, 179, 8, 0.6)",
                "0 0 20px rgba(234, 179, 8, 0.3)"
              ]
            }}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <span className="text-black font-bold text-xl">SNR</span>
          </motion.div>

          {/* Orbit Ring with Glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-yellow-500/40 rounded-full shadow-lg" 
               style={{ boxShadow: "0 0 30px rgba(234, 179, 8, 0.2)" }}></div>

          {/* Orbital Container with Smooth Rotation */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ transformOrigin: "center" }}
          >
            {/* Orbital Tools - Positioned exactly on the orbit line */}
            {tools.slice(0, 16).map((tool, index) => {
              const angle = (index / 16) * 360;
              const radian = (angle * Math.PI) / 180;
              const radius = 160; // Exact match to orbit ring radius (320px / 2)
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;

              return (
                <motion.div
                  key={tool.name}
                  className="absolute"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <motion.div 
                    className={`w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-xl border-2 border-gray-100 ${
                      hoveredTool === tool.name ? 'z-30' : ''
                    }`}
                    whileHover={{ 
                      scale: 1.3,
                      boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
                    }}
                    animate={{ 
                      rotate: -360,
                      scale: hoveredTool === tool.name ? 1.25 : 1,
                      boxShadow: hoveredTool === tool.name 
                        ? `0 0 25px ${tool.color}60`
                        : "0 5px 20px rgba(0,0,0,0.15)"
                    }}
                    transition={{ 
                      rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                      scale: { duration: 0.2, ease: "easeOut" },
                      boxShadow: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <i className={`${tool.icon} text-lg`} style={{ color: tool.color }}></i>

                    {/* Enhanced Tooltip */}
                    {hoveredTool === tool.name && (
                      <motion.div 
                        className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-50 border border-yellow-500/30"
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ boxShadow: "0 8px 25px rgba(0,0,0,0.3)" }}
                      >
                        <div className="font-semibold text-yellow-400">{tool.name}</div>
                        <div className="text-gray-300 text-xs">{tool.description}</div>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Clean Stats */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm">
            {filteredTools.length} {activeCategory === "all" ? "Technologies" : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Tools`} • 
            Hover for details
          </p>
        </motion.div>
      </div>
    </section>
  );
}