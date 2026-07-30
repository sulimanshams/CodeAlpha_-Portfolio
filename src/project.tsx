'use client';

import { motion } from "framer-motion"; 
import E from "@/public/wwe.png"
import W from "@/public/e2.png"
import P from "@/public/P.png"
import B from "@/public/B.png"
import Q from "@/public/q.png"


import Image from "next/image";

const projects = [
  {
    id: 1,
    title: 'WasteSwift Admin Dashboard',
    subtitle: 'Waste Management System',
    description:
      'A comprehensive admin dashboard designed for WasteSwift, a waste management company in Kyrgyzstan. This platform streamlines coordination between customers and waste collection services, enabling efficient scheduling, tracking, and management of waste operations.',
    features: [
      'Customer & Company Coordination',
      'Waste Collection Scheduling',
      'Real-time Tracking & Management',
    ],
    image: W,
  },
  {
    id: 2,
    title: 'Edulin Management System',
    subtitle: 'Educational Platform',
    description:
      'A powerful educational management system developed for schools in Turkey. Edulin includes three dedicated admin dashboards for managing students, teachers, and school operations, improving efficiency and organization across the entire institution.',
    features: [
      'Student Management Dashboard',
      'Teacher & Staff Management',
      'School Administration System',
    ],
    image: E,
  },
   {
    id: 3,
    title: 'Personal Portfolio Website',
    subtitle: 'Frontend Developer Portfolio',
    description:
      'A sleek and responsive portfolio website showcasing my projects, skills, and experience. Designed with modern UI principles, smooth animations, and optimized performance.',
    features: [
      'Responsive Design',
      'Smooth Animations (Framer Motion)',
      'Modern UI/UX',
    ],
    image:P,
  },
  {
  id: 4,
  title: 'Bank Account Dashboard',
  subtitle: 'Advanced React Fintech App',
  description:
    'A modern banking dashboard built as a practice project using advanced React concepts. The application simulates a real-world fintech experience, allowing users to manage accounts, view balances, and track transactions in an intuitive interface.',
  
  features: [
    'Account Balance Management',
    'Transaction History Tracking',
    'State Management with Advanced React',
    'Reusable Component Architecture',
  ],

  image:B,
  live:"https://bank-account-ten.vercel.app"
},
{
  id: 5,
  title: 'React Quiz App',
  subtitle: 'Interactive Learning Platform',
  description:
    'An advanced interactive quiz application built with React, designed to provide a smooth and engaging learning experience. The project focuses on dynamic state management, reusable components, and real-time user interaction.',
  features: [
    'Dynamic Question Rendering',
    'State Management with React Hooks',
    'Real-time Score Tracking',
    'Interactive UI Feedback',
  ],
  image: Q,
    live: "https://react-quiz-olive-eight.vercel.app"
}
];

export function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="lab" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="mb-24 last:mb-0"
            >
              <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1"
                >
                  <p className="text-purple-400 font-semibold text-sm mb-2">
                    {project.subtitle}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-purple-600/20 border border-purple-500/50 text-purple-300 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                   onClick={() => window.open(project.live, "_blank")}
                  >
                    View Project
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1"
                >
                  <div className="relative rounded-3xl aspect-square overflow-hidden group cursor-pointer border border-purple-500/30">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
                          backgroundSize: '40px 40px',
                        }}
                      ></div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                      <p className="text-white font-semibold text-lg">
                        Project Preview
                      </p>
                    </div>

                  </div>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}