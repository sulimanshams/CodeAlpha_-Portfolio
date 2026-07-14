"use client";
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"


export default function NavBar() {
   const [isOpen , setIsOpen] = useState(false) 
   const navItems = [
     {name:"Home" , herf:"#home"},
     { name: 'About', herf: '#about' },
     { name: 'Lab', herf: '#lab' },
   ]
    return (
        <nav className="fixed top-0 z-50 w-full  bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
          <div className="max-w-6xl mx-auto px-4 py-4 flex  items-center justify-between">
            <motion.div
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration:0.5}}
             className="text-2xl font-bold text-white"
            >
                <span
                 className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
                >
                      Ξ
                </span>
            </motion.div>
            <div className=" hidden md:flex gap-8">
                {navItems.map((item , index) => (
                    <motion.a  
                     key={item.name}
                     href={item.herf}
                     initial={{opacity:0 , y:-10}}
                     animate={{opacity:1 , y:0}}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className="text-slate-300 hover:text-purple-400 transition-colors duration-300"
                    >
                            {item.name}
                    </motion.a>
                ))}
            </div>
            <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                    >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
            </button>
        </div>
    {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-t border-purple-500/20 py-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.herf}
              className="block px-4 py-2 text-slate-300 hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
        </nav>
    )
}