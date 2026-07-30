'use client';
import {motion} from "framer-motion"
import {
  SiTailwindcss,
  SiHtml5,
   SiCss,
  SiNodedotjs,
  SiBootstrap,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiMaterialdesign,
  SiJavascript,
  SiReact
} from "react-icons/si";

const skills = [
    { icon: SiHtml5, name: 'HTML', category: 'Frontend' },
    { icon: SiCss, name: 'CSS', category: 'Frontend' },
    { icon: SiBootstrap, name: 'Bootstrap', category: 'Frontend' },
  { icon: SiJavascript, name: 'JavaScript', category: 'Frontend' },
  { icon: SiNodedotjs, name: 'Node.js', category: 'Backend' },
  { icon: SiReact, name: 'React', category: 'Frontend' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', category: 'Frontend' },
  { icon: SiTypescript, name: 'TypeScript', category: 'Frontend' },
  { icon: SiVuedotjs, name: 'Vue.js', category: 'Frontend' },
  { icon: SiNextdotjs, name: 'Next.js', category: 'Frontend' },
  { icon: SiMaterialdesign, name: 'Material UI', category: 'Frontend' },
];;


export default function Skills(){
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
       <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto">
                     <motion.div 
                     initial={{opacity:0 , y:-20}}
                     whileInView={{opacity:1 , y:0}}
                     viewport={{once:true}}
                     transition={{duration:0.6}}
                     className="text-center mb-16"
                     >
                          <p className="text-purple-400 font-semibold mb-2">
                            Skills & Tools
                          </p>
                           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                I&apos;m currently looking to join a <span className="text-purple-400">cross-functional</span> team
                           </h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                That values improving people&apos;s lives through accessible design
                            </p>
                     </motion.div>
                     <motion.div
                     variants={containerVariants}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once:true , margin:"-100px"}}
                     className="grid fride-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                     >
                          {skills.map((skill, index) => {
                            const Icon = skill.icon
                         return (
                                <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-br from-purple-600/20 to-purple-700/10 border border-purple-500/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:border-purple-400/60 active:scale-95 transition-all duration-300 cursor-pointer group"
                                >
                                 <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                                        <Icon />
                                </div>
                                <h3 className="text-white font-semibold text-sm mb-1">
                                    {skill.name}
                                </h3>
                                <p className="text-purple-300 text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                                    {skill.category}
                                </p>
                                </motion.div>
                                )
                               })}
                     </motion.div>
                </div>
       </section>
  )
}