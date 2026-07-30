'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const, 
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Main intro */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-purple-400 text-sm font-medium mb-2">Hello I am</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
            Solaiman Shams
          </h1>
          <p className="text-purple-300 text-lg">A Frontend developer who</p>
        </motion.div>

        {/* Hero Card with avatar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
        >
          {/* Avatar section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="glow-purple w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-purple-500/30 to-purple-800/30 border border-purple-500/50 flex items-center justify-center">
              <div className="w-36 h-36 md:w-44 md:h-44 bg-gradient-to-br from-slate-200 to-slate-400 rounded-2xl flex items-center justify-center text-3xl font-bold text-slate-800">
                 <Image src="/Profile.jpg" alt="Profile" width={176} height={176}  className="object-cover w-full h-full rounded-2xl" />
              </div>
            </div>
          </motion.div>

          {/* Text section */}
          <motion.div variants={itemVariants} className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Judges a book<br />
              by its <span className="text-purple-400">cover</span>...
            </h2>
            <p className="text-slate-400 text-sm">
              Because at its most human level, this is what matters
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          onClick={() => {
              document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center"
         onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-1 h-3 bg-purple-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}