'use client';

import { motion } from 'framer-motion';
import Layout from '../../components/Layout';

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
              href="mailto:ahmedkhafaji11@gmail.com" 
              className="flex items-center gap-2 px-6 py-3 border border-ink text-sm uppercase tracking-widest hover:bg-ink hover:text-paper transition-all"
            >
              Contact me
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
                  period: "Feb 2024 — Present",
                  desc: "Modernizing legacy PHP/JavaScript systems and reducing query times by 30%. Built custom order tracking tools that eliminated 10+ hours of manual entry per week.",
                  stack: ["PHP", "JavaScript", "SQL", "Next.js"]
                },
                {
                  role: "Senior Full-Stack Developer & Team Lead",
                  company: "Lightring AI",
                  period: "2022 — 2023",
                  desc: "Led a team of 4 to deliver government and healthcare solutions. Implemented AWS CI/CD pipelines reducing deployment time by 50% and architected apps for 200+ concurrent users.",
                  stack: ["Node.js", "AWS", "CI/CD", "React"]
                },
                {
                  role: "Founder & Lead Engineer",
                  company: "Cayde Services Inc.",
                  period: "2020 — 2022",
                  desc: "Bootstrapped software company delivering government solutions. Built yuMeet mobile platform to 55,000+ users with real-time messaging and local-first data architecture.",
                  stack: ["React Native", "PostgreSQL", "Socket.IO", "Node.js"]
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
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Expertise & Education</h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-10">
                <h3 className="text-2xl font-serif italic">Technical Proficiency</h3>
                <div className="space-y-8">
                  {[
                    { cat: "Languages", items: "Python, JavaScript, TypeScript, PHP, SQL, Java, C" },
                    { cat: "Frameworks", items: "React, Next.js, Node.js, Express, React Native" },
                    { cat: "Databases", items: "PostgreSQL, MongoDB, Redis, MySQL" },
                    { cat: "Cloud & Tools", items: "AWS, Google Cloud, Docker, Kubernetes, Jenkins, Socket.IO" }
                  ].map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold">{skill.cat}</h4>
                      <p className="text-sm text-muted-foreground">{skill.items}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-10">
                <h3 className="text-2xl font-serif italic">Education</h3>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold">York University</h4>
                    <p className="text-sm font-sans">Bachelor of Engineering in Software Engineering</p>
                    <p className="text-xs text-muted-foreground italic">2020 — 2025</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif italic pt-10">Notable Projects</h3>
                <div className="space-y-8">
                  {[
                    { title: "Enterprise Billing System", desc: "100k+ daily transactions for Iraq Ministry of Finance" },
                    { title: "yuMeet Social App", desc: "55k+ users with real-time verification and messaging" },
                    { title: "Government E-Visa Platform", desc: "Processed 50k+ monthly applications securely" }
                  ].map((project, i) => (
                    <div key={i} className="space-y-1">
                      <h4 className="text-sm font-bold">{project.title}</h4>
                      <p className="text-xs text-muted-foreground">{project.desc}</p>
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
              Looking for an engineer <br /> to lead your <span className="italic">next venture?</span>
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
