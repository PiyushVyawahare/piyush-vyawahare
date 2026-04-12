"use client";
import { motion } from "framer-motion";
import { personal } from "@/data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section className='px-8 md:px-16 py-24 md:py-24 max-w-5xl'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className='flex items-center gap-3 mb-8'
      >
        <div className='w-6 h-px bg-accent' />
        <span className='font-mono text-lg text-accent tracking-widest uppercase font-bold'>
          available for opportunities
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-6xl md:text-8xl font-extrabold leading-none tracking-tight mb-6'
        style={{ letterSpacing: "-3px" }}
      >
        {personal.name.split(" ")[0]}
        <br />
        <span className='text-accent'>{personal.name.split(" ")[1]}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='font-mono text-lg text-muted max-w-3xl mb-10 leading-relaxed font-bold'
      >
        {personal.title} · {personal.tagline}
        <br />
        3+ years building production-grade web applications
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='flex flex-wrap gap-4 mb-12'
      >
        <a
          href='#projects'
          className='bg-accent text-bg px-7 py-3 rounded text-sm font-bold hover:bg-accent/90 transition-colors'
        >
          View Projects
        </a>
        <a
          href='/Piyush_Vyawahare_Resume.pdf'
          target='_blank'
          className='border border-white/15 text-white px-7 py-3 rounded text-sm font-mono hover:bg-white/5 transition-colors'
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='flex gap-5'
      >
        {[
          { icon: FiGithub, href: personal.github, label: "GitHub" },
          { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn" },
          { icon: FiMail, href: `mailto:${personal.email}`, label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted hover:text-accent transition-colors'
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
