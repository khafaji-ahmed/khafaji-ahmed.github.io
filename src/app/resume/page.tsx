'use client';

import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Download, Mail, Linkedin, Github, MapPin } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

const experience = [
  {
    role: "Full-Stack Software Engineer",
    company: "Distinctive Wood Products",
    period: "Feb 2024 — Present",
    location: "Toronto, Canada",
    desc: "Sole developer modernizing legacy systems, reducing query times by 30% and eliminating 10+ hours/week of manual data entry through custom automation tools.",
    stack: ["PHP", "JavaScript", "SQL", "Legacy Modernization"]
  },
  {
    role: "Senior Full-Stack Developer & Team Lead",
    company: "Lightring AI",
    period: "Nov 2022 — 2023",
    location: "Toronto, Canada",
    desc: "Led a team of 4 delivering high-stakes government and healthcare solutions. Implemented CI/CD on AWS, cutting deployment time by 50% and boosting workflow efficiency by 25%.",
    stack: ["AWS", "CI/CD", "Next.js", "Team Leadership"]
  },
  {
    role: "Founder & Lead Engineer",
    company: "Cayde Services Inc.",
    period: "2020 — 2022",
    location: "Toronto, Canada",
    desc: "Bootstrapped a software company to $150k+ revenue. Built and scaled yuMeet campus platform to 55,000+ users with real-time messaging and local-first data architecture.",
    stack: ["React Native", "PostgreSQL", "Socket.IO", "Product Strategy"]
  }
];

const education = [
  {
    degree: "Bachelor of Engineering in Software Engineering",
    school: "York University",
    period: "Sep 2020 — Apr 2025",
    location: "Toronto, ON, Canada"
  }
];

export default function Resume() {
  return (
    <Layout>
      <div className="editorial-container">
        {/* Header */}
        <section className="flex flex-col md:flex-row justify-between items-baseline gap-10 mb-32 border-b border-border pb-20">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-9xl font-serif font-bold tracking-tighter"
            >
              The <span className="italic font-light">Index.</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 text-[10px] uppercase tracking-widest text-muted-foreground"
            >
              <span className="flex items-center gap-2"><MapPin size={12} /> Toronto, Canada</span>
              <a href="mailto:ahmedkhafaji11@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail size={12} /> ahmedkhafaji11@gmail.com</a>
              <a href="https://linkedin.com/in/ahmed-khafaji" target="_blank" className="flex items-center gap-2 hover:text-accent transition-colors"><Linkedin size={12} /> LinkedIn</a>
              <a href="https://github.com/khafaji-ahmed" target="_blank" className="flex items-center gap-2 hover:text-accent transition-colors"><Github size={12} /> GitHub</a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-4"
          >
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.print(); }}
              className="flex items-center gap-2 px-6 py-3 border border-ink text-sm uppercase tracking-widest hover:bg-ink hover:text-paper transition-all"
            >
              <Download size={14} />
              Print Version
            </a>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="space-y-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground sticky top-40">Professional Experience</h2>
            </div>
            <div className="lg:col-span-8 space-y-24">
              {experience.map((job, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  className="group space-y-6"
                >
                  <div className="flex justify-between items-baseline border-b border-border pb-4 group-hover:border-ink transition-colors">
                    <h3 className="text-3xl font-serif italic">{job.role}</h3>
                    <span className="text-sm font-sans text-muted-foreground">{job.period}</span>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-sans font-bold">{job.company}</h4>
                        <span className="text-[10px] uppercase tracking-widest opacity-50">{job.location}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">
                        {job.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 h-fit max-w-[200px] justify-end">
                      {job.stack.map(tech => (
                        <span key={tech} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-muted rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-32 border-t border-border">
            <div className="lg:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Academic Foundation</h2>
            </div>
            <div className="lg:col-span-8">
              {education.map((edu, i) => (
                <motion.div key={i} {...fadeInUp} className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-border pb-4">
                    <h3 className="text-3xl font-serif italic">{edu.degree}</h3>
                    <span className="text-sm font-sans text-muted-foreground">{edu.period}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-sans font-bold">{edu.school}</h4>
                    <span className="text-[10px] uppercase tracking-widest opacity-50">{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-32 border-t border-border">
            <div className="lg:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Technical Matrix</h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-10">
                <h3 className="text-2xl font-serif italic">Core Technologies</h3>
                <div className="space-y-8">
                  {[
                    { cat: "Languages", items: "Python, JavaScript, TypeScript, PHP, SQL, Java, C" },
                    { cat: "Frameworks", items: "React, Next.js, Node.js, Express, React Native" },
                    { cat: "Databases", items: "PostgreSQL, MongoDB, Redis, MySQL" },
                    { cat: "Infrastructure", items: "AWS, Google Cloud, Docker, Kubernetes, Jenkins" }
                  ].map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold">{skill.cat}</h4>
                      <p className="text-sm text-muted-foreground">{skill.items}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-10">
                <h3 className="text-2xl font-serif italic">Operational Skills</h3>
                <div className="space-y-8">
                  {[
                    { cat: "Leadership", items: "Team Lead, Founder, Mentorship, Code Reviews" },
                    { cat: "Systems", items: "System Architecture, CI/CD, Microservices, API Design" },
                    { cat: "Solutions", items: "Government & Healthcare Tech, Fintech, Social Apps" },
                    { cat: "Methodology", items: "Agile, Product Lifecycle, Performance Optimization" }
                  ].map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold">{skill.cat}</h4>
                      <p className="text-sm text-muted-foreground">{skill.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-64 border-t border-border mt-32 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-8">End of Document</p>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-12">Building high-performance <br /> architecture for the modern web.</h2>
            <a href="mailto:ahmedkhafaji11@gmail.com" className="text-xl font-sans uppercase tracking-widest border-b border-ink pb-2 hover:text-accent hover:border-accent transition-all">
              Initiate Inquiry
            </a>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
