'use client';

import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Download } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function Resume() {
  return (
    <Layout>
      <div className="editorial-container">
        {/* Header */}
        <section className="flex flex-col md:flex-row justify-between items-baseline gap-10 mb-32 border-b border-border pb-20">
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
            className="flex gap-4"
          >
            <a 
              href="/resume.pdf" 
              className="flex items-center gap-2 px-6 py-3 border border-ink text-sm uppercase tracking-widest hover:bg-ink hover:text-paper transition-all"
            >
              <Download size={14} />
              Download PDF
            </a>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="space-y-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground sticky top-40">Experience</h2>
            </div>
            <div className="lg:col-span-8 space-y-24">
              {[
                {
                  role: "Full-Stack Software Engineer",
                  company: "Distinctive Wood Products",
                  period: "2024 — Present",
                  desc: "Modernizing legacy infrastructure and internal systems. Engineered custom high-efficiency tools reducing query latency by 30% and eliminating manual bottlenecks for 50+ daily users.",
                  stack: ["PHP", "JavaScript", "SQL", "Microservices"]
                },
                {
                  role: "Senior Developer & Team Lead",
                  company: "Lightring AI",
                  period: "2022 — 2023",
                  desc: "Led a cross-functional team of 4 to deliver high-stakes government and healthcare solutions. Orchestrated CI/CD pipelines on AWS, slashing deployment time by 50% with zero-downtime releases.",
                  stack: ["React", "AWS", "Node.js", "Jenkins"]
                },
                {
                  role: "Founder & Lead Engineer",
                  company: "Cayde Services Inc.",
                  period: "2020 — 2022",
                  desc: "Bootstrapped a software house delivering mission-critical campus solutions. Architected and scaled the yuMeet platform to 55,000+ users with real-time systems and offline-first data synchronization.",
                  stack: ["React Native", "Next.js", "PostgreSQL", "Socket.IO"]
                }
              ].map((job, i) => (
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
                      <h4 className="text-xl font-sans font-bold">{job.company}</h4>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">
                        {job.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 h-fit max-w-[200px]">
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

          {/* Expertise Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-32 border-t border-border">
            <div className="lg:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Expertise</h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-10">
                <h3 className="text-2xl font-serif italic">Technical Proficiency</h3>
                <div className="space-y-8">
                  {[
                    { cat: "Languages", items: "TypeScript, JavaScript, Python, PHP, SQL, Java, C" },
                    { cat: "Frameworks", items: "Next.js, React, Node.js, Express, React Native" },
                    { cat: "Data", items: "PostgreSQL, MongoDB, Redis, MySQL" },
                    { cat: "Cloud", items: "AWS, Google Cloud, Docker, Kubernetes, Jenkins" }
                  ].map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold">{skill.cat}</h4>
                      <p className="text-sm text-muted-foreground">{skill.items}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-10">
                <h3 className="text-2xl font-serif italic">Soft Disciplines</h3>
                <div className="space-y-8">
                  {[
                    { cat: "Leadership", items: "Team Management, Mentorship, Tech Lead" },
                    { cat: "Product", items: "Strategy, Roadmap Planning, UX Research" },
                    { cat: "Methods", items: "Agile, Scrum, TDD, Domain Driven Design" },
                    { cat: "Other", items: "Public Speaking, Technical Writing" }
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

        {/* Closing CTA */}
        <section className="py-64 border-t border-border mt-32">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <h2 className="text-4xl md:text-7xl font-serif leading-tight mb-12">
              Looking for an architect <br /> to lead your <span className="italic">next venture?</span>
            </h2>
            <div className="flex gap-8">
              <a href="mailto:ahmedkhafaji11@gmail.com" className="text-xl font-serif italic link-underline">
                Let&apos;s discuss the details.
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-border flex flex-col md:flex-row justify-between gap-10 text-[10px] uppercase tracking-[0.3em]">
          <div className="flex gap-8">
            <a href="https://github.com/khafaji-ahmed" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">Github</a>
            <a href="https://linkedin.com/in/ahmed-khafaji" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">LinkedIn</a>
            <a href="https://x.com/khafajiahmed" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">X / Twitter</a>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <span>© 2025 Ahmed Khafaji</span>
            <span className="text-muted-foreground">Software Architect</span>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
