import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillsList = SKILLS || [];

  return (
    <section className="py-16 border-t border-gray-100 dark:border-gray-800">
      <h2 className="text-xl font-semibold mb-8 text-black dark:text-white">Skills</h2>
      
      <div className="flex flex-wrap gap-3">
        {skillsList.map((skill, index) => (
          <motion.span 
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default border border-transparent hover:border-black dark:hover:border-white"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;