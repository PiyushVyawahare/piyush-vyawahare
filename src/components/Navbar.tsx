"use client";
import { motion } from "framer-motion";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex justify-between items-center px-8 md:px-16 py-6 border-b border-white/5 sticky top-0 z-50 backdrop-blur-sm bg-bg/80'
    >
      <a href='#' className='text-lg font-bold tracking-tight'>
        PV<span className='text-accent'>.</span>
      </a>
      <div className='hidden md:flex gap-8'>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className='font-mono text-sm text-muted hover:text-white transition-colors tracking-widest'
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href={"#contact"}
        className='font-mono text-xs text-accent border border-accent/30 px-4 py-2 rounded hover:bg-accent/10 transition-colors'
      >
        hire me
      </a>
    </motion.nav>
  );
}
