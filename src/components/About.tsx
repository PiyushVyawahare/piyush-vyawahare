"use client";
import { motion } from "framer-motion";
import { personal, stats } from "@/data";

export default function About() {
  return (
    <section id='about' className='px-8 md:px-16 py-20 border-t border-white/5'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='font-mono text-lg text-accent tracking-widest uppercase mb-10 font-bold'
      >
        About
      </motion.div>

      <div className='grid md:grid-cols-2 gap-16 items-start'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='space-y-4'
        >
          {personal.about.map((para, i) => (
            <p key={i} className='font-mono text-sm text-muted leading-relaxed font-semibold'>
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='grid grid-cols-2 gap-4'
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className='bg-surface border border-white/7 rounded-lg p-5'
            >
              <div className='text-4xl font-extrabold text-accent tracking-tight' style={{ letterSpacing: "-1px" }}>
                {stat.value}
              </div>
              <div className='font-mono text-sm text-muted mt-1 font-semibold'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
