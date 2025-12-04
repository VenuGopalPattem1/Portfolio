import React, { useState } from 'react';
import { SOCIALS } from '../constants';
import { Copy, Check, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("venuv8605@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative mt-24 pb-12">
      <div className="border-t border-zinc-200 dark:border-white/10 pt-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left: Heading & Description */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Let's connect.
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed text-base">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col items-start md:items-end gap-6">

            {/* Email Card */}
            <button
              onClick={copyEmail}
              className="group relative flex items-center gap-3 px-5 py-3 bg-zinc-100 dark:bg-white/5 rounded-xl hover:bg-zinc-200 dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/5 w-full md:w-auto justify-center md:justify-start"
            >
              <span className={`transition-all duration-300 ${copied ? 'text-emerald-500 scale-110' : 'text-zinc-400 scale-100'}`}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </span>
              <span className="text-lg font-mono font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                venuv8605@gmail.com
              </span>
            </button>

            {/* Social Links Row */}
            <div className="flex gap-4 flex-wrap">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 text-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white border border-zinc-200 dark:border-white/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/50"
                  aria-label={social.name}
                >
                  {social.icon && <social.icon size={20} strokeWidth={1.5} />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center pt-8 border-t border-zinc-100 dark:border-white/5 text-sm text-zinc-500 dark:text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Venugopal. All rights reserved.</p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;