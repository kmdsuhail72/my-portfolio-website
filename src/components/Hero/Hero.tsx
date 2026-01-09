import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaRocket } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-primary px-4 py-2 rounded-full mb-6">
              <FaCode />
              <span className="font-medium">Full Stack Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-primary">John</span>
              <br />
              <span className="text-secondary">Developer</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              I build exceptional digital experiences that are fast, accessible, 
              visually appealing, and responsive. Let's build something amazing together!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <span>View Projects</span>
                <FaArrowRight />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-blue-50 transition-all"
              >
                Contact Me
              </motion.button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Profile Image Container */}
              <div className="relative z-10 bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 transform rotate-3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop" 
                    alt="Developer" 
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
              >
                <FaRocket className="text-3xl text-accent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="text-2xl font-bold text-primary">🚀</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;