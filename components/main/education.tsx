"use client";
import React from "react";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-10 z-[20]"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
        Education
      </h1>
      <div className="flex flex-col gap-6 px-10 max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] p-6"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            B.Tech in Computer Science (Blockchain)
          </h3>
          <h4 className="text-xl text-[#b49bff] mb-4">
            SRM University, Chennai
          </h4>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] p-6"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            12th Grade
          </h3>
          <h4 className="text-xl text-[#b49bff] mb-4">
            St. Paul Junior & Senior College, Nagpur
          </h4>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] p-6"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            10th Grade
          </h3>
          <h4 className="text-xl text-[#b49bff] mb-4">
            Krishak English School
          </h4>
        </motion.div>
      </div>
    </section>
  );
};
