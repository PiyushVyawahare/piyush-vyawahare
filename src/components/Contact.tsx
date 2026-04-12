"use client";
import { motion } from "framer-motion";
import { personal } from "@/data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id='contact' className='px-8 md:px-16 py-28 border-t border-white/5 text-center'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className='font-mono text-lg text-accent tracking-widest uppercase mb-8 font-bold'>Contact</div>
        <h2 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-4' style={{ letterSpacing: "-2px" }}>
          Let&apos;s work
          <br />
          <span className='text-accent'>together.</span>
        </h2>
        <p className='font-mono text-md text-muted mb-10 font-medium'>
          Open to SDE-2 and Full Stack Engineer roles at product-based companies
        </p>

        <div className='flex justify-center gap-4 flex-wrap mb-16'>
          <a
            href={`mailto:${personal.email}`}
            className='font-mono text-xs text-white border border-white/15 px-5 py-3 rounded hover:bg-white/5 transition-colors flex items-center gap-2'
          >
            <FiMail size={14} /> {personal.email}
          </a>
          <a
            href={personal.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='font-mono text-xs text-white border border-white/15 px-5 py-3 rounded hover:bg-white/5 transition-colors flex items-center gap-2'
          >
            <FiLinkedin size={14} /> LinkedIn
          </a>
          <a
            href={personal.github}
            target='_blank'
            rel='noopener noreferrer'
            className='font-mono text-xs text-white border border-white/15 px-5 py-3 rounded hover:bg-white/5 transition-colors flex items-center gap-2'
          >
            <FiGithub size={14} /> GitHub
          </a>
        </div>

        <p className='font-mono text-xs text-subtle'>Built with Next.js · TypeScript · Tailwind CSS · Framer Motion</p>
      </motion.div>
    </section>
  );
}
