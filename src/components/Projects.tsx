"use client";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id='projects' className='px-8 md:px-16 py-20 border-t border-white/5'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='font-mono text-lg text-accent tracking-widest uppercase mb-10 font-bold'
      >
        Projects
      </motion.div>

      <div className='grid md:grid-cols-2 gap-5'>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            whileHover={{ borderColor: "rgba(110,231,183,0.25)" }}
            className='bg-surface border border-white/7 rounded-xl p-6 flex flex-col justify-between transition-colors'
          >
            <div>
              <div className='flex justify-between items-start mb-3'>
                <div>
                  <h3 className='font-mono text-lg font-bold'>{project.name}</h3>
                  <p className='font-mono text-sm text-accent mt-0.5 font-semibold'>{project.subtitle}</p>
                </div>
                <div className='flex gap-3'>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted hover:text-white transition-colors'
                      aria-label='GitHub'
                    >
                      <FiGithub size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted hover:text-white transition-colors'
                      aria-label='Live'
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className='font-mono text-sm text-muted leading-relaxed mb-5 font-medium'>{project.description}</p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className='font-mono text-sm bg-white/4 border border-white/8 px-2.5 py-1 rounded text-gray-400'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
