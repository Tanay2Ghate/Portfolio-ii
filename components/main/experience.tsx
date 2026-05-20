"use client";
import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    title: "Campus Ambassador",
    company: "Indian Institute of Technology Gandhinagar",
    description: "Represented IIT Gandhinagar on campus and promoted institutional initiatives. Assisted in outreach, event promotions, and student engagement activities. Developed leadership, communication, and networking skills.",
  },
  {
    title: "Web Development Intern",
    company: "TechSonix Solutions",
    description: "Built and maintained web pages with HTML, CSS, and JavaScript. Implemented responsive UI components. Used Git for version control and team collaboration.",
  },
  {
    title: "Summer Intern",
    company: "Pledge A Smile",
    description: "Assisted in project enhancements and technical discussions. Supported workflow optimization under supervision.",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-10 z-[20]"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
        Experience
      </h1>
      <div className="flex flex-col gap-6 px-10 max-w-4xl w-full">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] p-6"
          >
            <h3 className="text-2xl font-bold text-white">
              {exp.title}
            </h3>
            <h4 className="text-lg text-[#b49bff] mt-1 mb-2">
              {exp.company}
            </h4>
            <p className="mt-2 text-gray-300">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
