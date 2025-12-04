import React from 'react';
import { SKILLS, ABOUT_TEXT } from '../constants';

const About: React.FC = () => {
  const text = ABOUT_TEXT || [];
  const skills = SKILLS || [];

  return (
    <section id="about-me" className="py-24 scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white flex items-center gap-3">
        About Me
        <span className="h-px flex-1 bg-zinc-200 dark:bg-white/10"></span>
      </h2>
      
      <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400 leading-loose max-w-3xl">
        {text.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xs font-mono font-medium mb-6 text-zinc-500 dark:text-zinc-400 uppercase tracking-widest flex items-center gap-2">
           Tech Stack
           <span className="h-px w-8 bg-zinc-200 dark:bg-zinc-800"></span>
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="px-4 py-1.5 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 rounded-lg hover:border-zinc-400 dark:hover:border-white/30 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;