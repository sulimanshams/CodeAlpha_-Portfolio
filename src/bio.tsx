'use client';

import {motion} from "framer-motion"
export default function Bio(){
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className=" py-24 px-24 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl">

            </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px'}}
            >
                  <motion.h2 variants={itemVariants}
                   className="text-4x1 md:text-5x1 font-bold text-white text-center mb-12"
                  >
                    I&apos;m a Front-End Developer.
                  </motion.h2>
                  <motion.div variants={itemVariants}
                  className="mb-8"
                  >
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        Currently, I&apos;m a Front-End Developer at{' '}
                        <span className="text-purple-400 font-semibold">
                            Fajr Agency
                        </span>
                    </p>
                    <p className="text-slate-400 text-base leading-relaxed">
                        I am a passionate Frontend Developer with a strong focus on building clean, responsive, and user-friendly web applications.<br/> I specialize in transforming ideas and designs into high-quality, interactive digital experiences using modern web technologies.
                    </p>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                      <button
                      className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 transition-colors-duration-300"
                      >
                           Get my Resume
                           <svg className="w-5 h-5"
                            fill="none" 
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                           >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                           </svg>
                      </button>
                  </motion.div>
            </motion.div>
        </div>
    </section>
  )
}