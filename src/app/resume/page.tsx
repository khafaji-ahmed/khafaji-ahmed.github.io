'use client';

import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Download, ExternalLink } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
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
                  role: "Founder & CTO",
                  company: "Stealth Startup",
                  period: "2023 — Present",
                  desc: "Leading the architectural design and implementation of a next-generation data platform. Orchestrating high-performance systems and managing product strategy.",
                  stack: ["Next.js", "Rust", "PostgreSQL", "AWS"]
                },
                {
                  role: "Software Architect",
                  company: "Enterprise Solutions",
                  period: "2021 — 2023",
                  desc: "Revolutionized core infrastructure, improving system latency by 40% and scaling to handle 5M+ monthly active users.",
                  stack: ["Node.js", "Kubernetes", "Redis", "Terraform"]
                },
                {
                  role: "Lead Frontend Engineer",
                  company: "Creative Labs",
                  period: "2019 — 2021",
                  desc: "Designed and developed high-fidelity user interfaces and design systems for global clients in the luxury and tech sectors.",
                  stack: ["React", "TypeScript", "Framer Motion", "Tailwind"]
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

          {/* Education & Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-32 border-t border-border">
            <div className="lg:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Expertise</h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-10">
                <h3 className="text-2xl font-serif italic">Technical Proficiency</h3>
                <div className="space-y-8">
                  {[
                    { cat: "Languages", items: "TypeScript, JavaScript, Rust, Python, Go" },
                    { cat: "Frameworks", items: "Next.js, React, Node.js, Express, Fastify" },
                    { cat: "Data", items: "PostgreSQL, MongoDB, Redis, Prisma, Drizzle" },
                    { cat: "Cloud", items: "AWS, Vercel, Docker, CI/CD, Terraform" }
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
      </div>
    </Layout>
  );
}
