"use client";
import { motion } from "framer-motion";
import { experience } from "@/data";

export default function Experience() {
  return (
    <section id='experience' className='px-8 md:px-16 py-20 border-t border-white/5'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='font-mono text-lg text-accent tracking-widest uppercase mb-10 font-bold'
      >
        Experience
      </motion.div>

      <div className='space-y-0'>
        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className='border-b border-white/5 py-10 first:pt-0'
          >
            <div className='flex flex-wrap justify-between items-start gap-4 mb-3'>
              <div>
                <h3 className='text-lg font-bold'>{job.title}</h3>
                <p className='font-mono text-md text-accent mt-1 font-semibold'>
                  {job.company} · {job.location}
                </p>
              </div>
              <div className='flex gap-3 items-center'>
                <span className='font-mono text-sm text-muted bg-white/4 border border-white/8 px-3 py-1.5 rounded font-semibold'>
                  {job.type}
                </span>
                <span className='font-mono text-sm text-muted bg-white/4 border border-white/8 px-3 py-1.5 rounded font-semibold'>
                  {job.period}
                </span>
              </div>
            </div>

            <ul className='space-y-2.5 mt-5'>
              {job.bullets.map((bullet, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * j }}
                  className='flex gap-3 font-mono text-sm text-muted leading-relaxed font-medium'
                >
                  <span className='text-accent mt-0.5 flex-shrink-0'>▸</span>
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
