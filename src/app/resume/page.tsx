'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Download, Briefcase, GraduationCap, Code2, Mail, MapPin, Phone } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Resume() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar */}
        <motion.section 
          variants={stagger}
          initial="initial"
          animate="animate"
          className="lg:col-span-4 space-y-8"
        >
          <motion.div variants={fadeInUp} className="glass rounded-[2.5rem] p-10 text-center lg:text-left">
            <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 relative">
              <Image 
                src="/selfie.png" 
                alt="Ahmed Khafaji" 
                width={128} 
                height={128} 
                className="rounded-full grayscale border-2 border-zinc-800"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2 tracking-tight">Ahmed Khafaji</h1>
            <p className="text-zinc-400 mb-8 font-medium">Founder & Lead Engineer</p>
            
            <div className="space-y-4 text-sm text-zinc-500 mb-8">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Mail size={16} />
                <span>ahmedkhafaji11@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone size={16} />
                <span>647-765-6229</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <MapPin size={16} />
                <span>Toronto, Canada</span>
              </div>
            </div>

            <Button size="lg" className="w-full rounded-full bg-white text-black hover:bg-zinc-200" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass rounded-[2.5rem] p-10">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-zinc-400" size={20} />
              <h3 className="font-bold">Core Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'PHP',
                'React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 
                'Redis', 'Docker', 'Kubernetes', 'CI/CD'
              ].map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Main Content */}
        <motion.section 
          variants={stagger}
          initial="initial"
          animate="animate"
          className="lg:col-span-8 space-y-12"
        >
          {/* Experience */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Briefcase className="text-white" size={20} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>
            
            <div className="space-y-10 pl-2">
              {[
                {
                  role: "Founder & Lead Engineer",
                  company: "CAYDE SERVICES INC.",
                  period: "2022 - Present",
                  description: "Bootstrapped and led a Canadian software company delivering government and campus-scale solutions. Built and scaled yuMeet, a university social platform with real-time messaging and event matchmaking."
                },
                {
                  role: "Senior Full-Stack Developer",
                  company: "Wood Manufacturer",
                  period: "Feb 2024 - Present",
                  description: "Led a team of 5 developers in refactoring an internal system using PHP and JavaScript, improving performance by 40%. Architected and optimized database structures."
                },
                {
                  role: "Senior Full-Stack Developer & Team Lead",
                  company: "Lightring AI",
                  period: "Nov 2022 - Present",
                  description: "Directed development of critical projects for government and healthcare sectors. Introduced CI/CD pipelines and DevOps practices, reducing deployment times by 50%."
                }
              ].map((job, i) => (
                <div key={i} className="relative pl-8 border-l border-zinc-800 space-y-2">
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-zinc-700" />
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <span className="text-sm font-medium text-zinc-500">{job.period}</span>
                  </div>
                  <p className="text-zinc-400 font-medium">{job.company}</p>
                  <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Projects */}
          <motion.div variants={fadeInUp} className="space-y-8 pt-4">
             <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <FileText className="text-white" size={20} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Key Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "yuMeet", desc: "Campus Social App with 55k+ users." },
                { title: "Enterprise Billing", desc: "100k+ daily transactions for Iraq Gov." },
                { title: "E-Visa Platform", desc: "Reducing processing time by 40%." },
                { title: "Auction Platform", desc: "Real-time bidding with $500k+ volume." }
              ].map((proj, i) => (
                <div key={i} className="glass p-6 rounded-3xl border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <h4 className="font-bold mb-2 text-white">{proj.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeInUp} className="space-y-8 pt-4 pb-10">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>
            <div className="glass p-8 rounded-[2rem] border-zinc-800/50">
              <h3 className="text-xl font-bold text-white">York University</h3>
              <p className="text-zinc-400">Bachelor of Engineering - Software Engineering</p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </Layout>
  );
}
