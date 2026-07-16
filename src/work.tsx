'use client';
import {motion} from "framer-motion"
import E from "@/public/E.svg"
import W from "@/public/W.svg"
import Image from "next/image";


const Works = [
 {
    id: 1,
    title: 'Edulin Admin Dashboard',
    description: 'Designed and developed a school management dashboard for admins to manage classes, students, and teachers efficiently',
    icon: E,
    color: 'from-#0CC0B1-600/30 to-blue-700/60',
  },
   {
    id: 4,
    title: 'WasteSwift Dashboard',
    description: 'Implemented dynamic interfaces using React, Material UI, and Next.js for tracking and managing application data',
    icon: W,
    color: 'from-#22C55E-600/30 to-green-600/80',
  },
]

export default function Work() {
 const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
   
return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl">

            </div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
            <motion.h2
             initial={{opacity:0 , y:-20}}
             whileInView={{opacity:1 , y:0}}
             viewport={{once:true}}
             transition={{duration:0.6}}
             className="text-4xl md:text-5x1 font-bold text-white mb-16 text-center"
            >
               Work Experience
            </motion.h2>
            <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{once:true , margin:"-100px"}}
             className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {Works.map((work) => (
                    <motion.div
                     key={work.id}
                     variants={itemVariants}
                     whileHover={{y:-5 , transition: {duration:0.2}}}
                     className={`bg-gradient-to-br ${work.color} border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 cursor-pointer group`}
                     >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                  <Image src={work.icon} alt={work.title} width={50} height={50} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                {work.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                {work.description}
                            </p>
                            <button 
                             className="text-purple-400 hover:text-purple-300 font-semibold text-sm flex items-center gap-2 transition-colors"
                            >
                                Learn more
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
)  
}