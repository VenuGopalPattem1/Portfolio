import React, { useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github, ArrowLeft } from 'lucide-react';

interface AllProjectsProps {
    onBack: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-24 min-h-screen">
            <div className="mb-12">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
                    All Projects
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl">
                    A collection of my work in software engineering, web development, and system design.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="group flex flex-col bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200 dark:border-white/5 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/20 dark:hover:shadow-black/30 hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                    >
                        {project.image && (
                            <div className="w-full h-52 overflow-hidden border-b border-zinc-100 dark:border-white/5 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        )}

                        <div className="p-7 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <a
                                    href={project.link}
                                    className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                                >
                                    {project.title}
                                    <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                                <div className="flex gap-3 items-center">
                                    {project.github && (
                                        <a href={project.github} className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors" aria-label="Github">
                                            <Github size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-[15px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 flex-1 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-[11px] font-mono font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-white/5">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllProjects;
