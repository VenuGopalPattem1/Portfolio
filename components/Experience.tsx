import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  const experience = EXPERIENCE || [];

  return (
    <section id="experience" className="py-24 scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight mb-12 text-zinc-900 dark:text-white flex items-center gap-3">
        Experience
        <span className="h-px flex-1 bg-zinc-200 dark:bg-white/10"></span>
      </h2>
      
      <div className="space-y-4">
        {experience.map((exp, index) => (
          <div 
            key={index}
            className="relative pl-10 py-6 group"
          >
            {/* Gradient Timeline Line */}
            <div className="absolute left-[7px] top-6 bottom-0 w-[1px] bg-gradient-to-b from-zinc-300 to-transparent dark:from-white/20 dark:to-transparent group-last:hidden"></div>
            
            {/* Timeline Dot */}
            <div className="absolute left-0 top-[1.85rem] w-[15px] h-[15px] rounded-full bg-zinc-50 dark:bg-zinc-950 border-[3px] border-zinc-300 dark:border-zinc-700 group-hover:border-indigo-500 dark:group-hover:border-indigo-400 group-hover:scale-110 transition-all duration-300 z-10"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
              <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {exp.role}
              </h3>
              <span className="text-xs font-mono font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mt-1 sm:mt-0 bg-zinc-100 dark:bg-white/5 px-2 py-1 rounded">
                {exp.period}
              </span>
            </div>
            
            <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-3">
              {exp.company}
            </p>
            
            <p className="text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;