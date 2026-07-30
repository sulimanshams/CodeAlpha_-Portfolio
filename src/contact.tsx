'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  { icon: <HiOutlineMail />, name: 'Email', href:"mailto:sulimanshamsn181@gmail.com" , color: 'hover:text-purple-400' },
  { icon: <FaLinkedin />, name: 'LinkedIn', href:'https://www.linkedin.com/in/solaiman-shams-2227b8374', color: 'hover:text-blue-400' },
  { icon: <FaGithub />, name: 'GitHub', href: 'https://github.com/sulimanshams', color: 'hover:text-slate-300' },
  { icon: <FaInstagram />, name: 'Instagram', href: 'https://www.instagram.com/sulimanshams191?igsh=MTQweWhtbjJkNTA1NA==', color: 'hover:text-pink-400' },
];
export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Contact
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg mb-12 leading-relaxed"
          >
            I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives
            through accessible design. If you have a project in mind that you&apos;d like to get started, think you&apos;d like to have a chat.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="mailto:sulimanshamsn181@gmail.com"
            className="inline-block text-purple-400 hover:text-purple-300 font-semibold text-lg mb-12 transition-colors"
          >
            <motion.span
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Email me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.span>
          </motion.a>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 flex-wrap"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`text-3xl sm:text-4xl text-slate-100/90 md:text-slate-200 active:text-purple-300 active:scale-110 transition-all duration-300 rounded-full p-3 bg-slate-900/50 md:bg-transparent ${link.color}`}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-slate-500 text-sm mt-16 pt-8 border-t border-slate-700"
          >
            Designed & Developed by Solaiman Shams © 2026
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
