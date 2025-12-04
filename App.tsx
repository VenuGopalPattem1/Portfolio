import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 font-sans selection:bg-purple-100 dark:selection:bg-indigo-500/30 relative overflow-x-hidden text-zinc-900 dark:text-zinc-100">

        {/* Noise Texture Overlay */}
        <div className="fixed inset-0 z-[9999] pointer-events-none bg-noise opacity-[0.03] mix-blend-overlay"></div>

        {/* Atmospheric Background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
          {/* Top Aurora */}
          <div className="absolute top-0 inset-x-0 h-[600px] w-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-[120px] opacity-70 dark:opacity-40"></div>
          {/* Bottom Glow */}
          <div className="absolute bottom-0 inset-x-0 h-[600px] w-full bg-gradient-to-t from-teal-500/10 via-blue-500/5 to-transparent blur-[120px] opacity-50 dark:opacity-30"></div>
        </div>

        <Navbar />

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 pt-24 pb-12 relative z-10">
          {showAllProjects ? (
            <AllProjects onBack={() => setShowAllProjects(false)} />
          ) : (
            <>
              <Hero />
              <About />
              <Experience />
              <Education />
              <Projects onShowAll={() => setShowAllProjects(true)} />
            </>
          )}
          <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;