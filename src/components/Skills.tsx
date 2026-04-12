"use client";
import { motion } from "framer-motion";
import { skills } from "@/data";

export default function Skills() {
  return (
    <section id='skills' className='px-8 md:px-16 py-20 border-t border-white/5'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='font-mono text-lg text-accent tracking-widest uppercase mb-10 font-bold'
      >
        Skills
      </motion.div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {skills.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 * i }}
            className='bg-surface border border-white/7 rounded-lg p-5'
          >
            <div className='font-mono text-sm text-accent tracking-widest uppercase mb-4 font-semibold'>
              {group.category}
            </div>
            <div className='flex flex-wrap gap-2'>
              {group.items.map((item) => (
                <span
                  key={item}
                  className='font-mono text-sm bg-white/5 border border-white/10 px-2.5 py-1 rounded text-gray-300'
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
