import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  const education = EDUCATION || [];

  return (
    <section id="edu" className="py-12 border-t border-gray-100 dark:border-gray-800">
      <h2 className="text-xl font-semibold mb-8 text-black dark:text-white">Education</h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between group"
          >
            <div>
              <h3 className="text-base font-medium text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {edu.institution}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.degree}</p>
            </div>
            <span className="text-sm text-gray-400 font-mono mt-2 sm:mt-0">{edu.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;