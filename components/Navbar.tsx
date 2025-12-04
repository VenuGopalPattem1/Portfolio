import React from 'react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50">
      <nav className="w-full max-w-4xl bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 transition-all duration-300">
        <div className="h-28 px-6 flex items-center justify-between">

          <div className="flex items-center gap-6">
            {/* Profile Avatar */}
            <motion.a
              href=""
              className="relative flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:scale-105 transition-transform duration-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              aria-label="Home"
            >
              <img
                src="https://images7.alphacoders.com/126/thumb-1920-1266230.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.a>

            {/* Navigation Links */}
            <div className="flex items-center gap-6 text-sm sm:text-[15px] font-medium text-gray-600 dark:text-gray-100">
              <a href="#about-me" className="hover:text-black dark:hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">
                Projects
              </a>
              <a href="#edu" className="hover:text-black dark:hover:text-white transition-colors">
                Education
              </a>
            </div>
          </div>

          {/* Right Side - Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;