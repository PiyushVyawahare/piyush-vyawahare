"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personal } from "@/data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Image from "next/image";

const codeLines = [
  { text: "const piyush = {", color: "#E8E8F0" },
  { text: '  role: "Software Engineer",', color: "#aaaaaa" },
  { text: '  location: "Pune, India",', color: "#aaaaaa" },
  { text: '  experience: "3+ years",', color: "#aaaaaa" },
  { text: "  stack: [", color: "#aaaaaa" },
  { text: '    "React.js", "Next.js",', color: "#6EE7B7" },
  { text: '    "TypeScript", "Node.js",', color: "#6EE7B7" },
  { text: '    "MongoDB", "GraphQL"', color: "#6EE7B7" },
  { text: "  ],", color: "#aaaaaa" },
  { text: '  testing: "90%+ coverage",', color: "#aaaaaa" },
  { text: '  openTo: "SDE-2 roles",', color: "#818CF8" },
  { text: '  status: "available now"', color: "#4ade80" },
  { text: "};", color: "#E8E8F0" },
];

function CodeBlock() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 110);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  useEffect(() => {
    const i = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(i);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className='rounded-xl overflow-hidden border border-white/10'
      style={{ background: "#0D0D14" }}
    >
      <div className='flex items-center gap-2 px-4 py-3 border-b border-white/8' style={{ background: "#111118" }}>
        <div className='w-3 h-3 rounded-full' style={{ background: "#ff5f57" }} />
        <div className='w-3 h-3 rounded-full' style={{ background: "#ffbd2e" }} />
        <div className='w-3 h-3 rounded-full' style={{ background: "#28c840" }} />
        <span className='font-mono text-xs ml-2' style={{ color: "#555" }}>
          piyush.ts
        </span>
      </div>
      <div className='p-5 font-mono text-xs leading-6' style={{ minHeight: "210px" }}>
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className='flex'
          >
            <span className='select-none w-5 mr-4 text-right flex-shrink-0' style={{ color: "#333" }}>
              {i + 1}
            </span>
            <span style={{ color: line.color }}>{line.text}</span>
          </motion.div>
        ))}
        {visibleLines <= codeLines.length && (
          <div className='flex'>
            <span className='select-none w-5 mr-4 text-right flex-shrink-0' style={{ color: "#333" }}>
              {visibleLines + 1}
            </span>
            <span className='inline-block w-2 h-4' style={{ background: "#6EE7B7", opacity: showCursor ? 1 : 0 }} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className='px-8 md:px-16 py-20 md:py-28'>
      <div className='grid md:grid-cols-5 gap-12 lg:gap-20 items-center max-w-6xl mx-auto'>
        {/* Left — text content */}
        <div className='md:col-span-3 order-2 md:order-1'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='flex items-center gap-3 mb-8'
          >
            <div className='w-6 h-px bg-accent' />
            <span className='font-mono text-xs text-accent tracking-widest uppercase'>available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-6xl md:text-7xl font-extrabold leading-none mb-6'
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
            className='font-mono text-sm text-muted max-w-lg mb-10 leading-relaxed font-light'
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
        </div>

        {/* Right — photo + code block */}
        <div className='md:col-span-2 order-1 md:order-2 flex flex-col gap-6'>
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='relative mx-auto cursor-pointer'
            style={{ width: "190px" }}
          >
            <div
              className='absolute inset-0 rounded-2xl border-2 border-accent'
              style={{ transform: "translate(8px, 8px)" }}
            />
            <div
              className='relative rounded-2xl overflow-hidden border border-white/10 bg-surface'
              style={{ width: "190px", height: "190px" }}
            >
              <Image src='/piyush.PNG' alt='Piyush Vyawahare' fill className='object-cover object-top' priority />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className='absolute -bottom-3 -right-3 font-mono text-xs font-bold px-3 py-1.5 rounded-full'
              style={{ background: "#6EE7B7", color: "#0A0A0F" }}
            >
              open to work
            </motion.div>
          </motion.div>

          {/* Code block */}
          <CodeBlock />
        </div>
      </div>
    </section>
  );
}
