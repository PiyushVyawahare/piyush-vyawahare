"use client";
import { motion } from "framer-motion";
import { education, certifications } from "@/data";
import { FiExternalLink } from "react-icons/fi";

export default function EducationCerts() {
  return (
    <section id='education' className='px-8 md:px-16 py-20 border-t border-white/5'>
      <div className='grid md:grid-cols-2 gap-16'>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='font-mono text-lg text-accent tracking-widest uppercase mb-10 font-bold'
          >
            Education
          </motion.div>
          <div className='space-y-6'>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='bg-surface border border-white/7 rounded-lg p-5'
              >
                <h3 className='text-lg font-bold leading-snug mb-1'>{edu.degree}</h3>
                <p className='font-mono text-md text-accent mb-3 font-semibold'>{edu.institution}</p>
                <div className='space-y-1.5'>
                  <p className='font-mono text-sm text-muted font-medium'>{edu.period}</p>
                  <p className='font-mono text-sm text-white/70 font-semibold'>{edu.grade}</p>
                  <p className='font-mono text-sm text-muted font-medium'>{edu.activities}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='font-mono text-lg text-accent tracking-widest uppercase mb-10 font-bold'
          >
            Certifications
          </motion.div>
          <div className='space-y-4'>
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='bg-surface border border-white/7 rounded-lg p-5 flex justify-between items-start'
              >
                <div>
                  <h3 className='text-lg font-bold mb-1'>{cert.name}</h3>
                  <p className='font-mono text-sm text-accent mb-1 font-semibold'>{cert.issuer}</p>
                  <p className='font-mono text-sm text-muted font-medium'>{cert.year}</p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-mono text-xs text-accent2 hover:text-accent2/80 flex items-center gap-1 transition-colors'
                  >
                    verify <FiExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
