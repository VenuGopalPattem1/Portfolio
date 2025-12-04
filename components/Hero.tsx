import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INTRO_TEXT, SOCIALS } from '../constants';
import { FileText, Mail, Check, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText("venuv8605@gmail.com").then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }).catch(err => console.warn("Clipboard write failed", err));
      } else {
        console.warn("Clipboard API unavailable");
      }
    } catch (e) {
      console.warn("Clipboard error", e);
    }
  };

  return (
    <section className="pt-12 pb-20">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10 md:gap-12">

        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono font-medium tracking-wide uppercase">Open to Work</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {INTRO_TEXT.greeting}
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight">
              <span className="bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent">
                {INTRO_TEXT.role}
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {INTRO_TEXT.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6 pt-2"
          >
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="group flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:scale-[1.02] transition-all active:scale-95 shadow-xl shadow-zinc-900/10 dark:shadow-white/10"
              >
                {copied ? <Check size={16} /> : <Mail size={16} />}
                <span className="text-sm tracking-tight">{copied ? "Email Copied!" : "Get in touch"}</span>
                {!copied && <ArrowRight size={16} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />}
              </button>

              <span
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm"
              >
                <FileText size={16} />
                <span className="text-sm tracking-tight"><a href="https://drive.google.com/file/d/1jC-b-Zkp70Ru6pWdYMslPsBWInynLpVf/view">Resume</a></span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 px-1">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors transform duration-200"
                  aria-label={social.name}
                >
                  {social.icon && <social.icon size={20} strokeWidth={1.5} />}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative shrink-0 group"
        >
          {/* Avatar Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50 rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images7.alphacoders.com/126/thumb-1920-1266230.jpg"
              alt="VenuGopal"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;