import React from 'react';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DP</span>
              </div>
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-gray-400">
              Building exceptional digital experiences with modern technologies.
              Let's create something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-bold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'AWS', 'Tailwind', 'MongoDB'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} DevPortfolio. Made with</span>
              <FaHeart className="text-red-500" />
              <span>by John Developer</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <FaArrowUp />
            </button>
          </div>

          {/* Deployment Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                Deployed with GitHub Actions & AWS S3
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;