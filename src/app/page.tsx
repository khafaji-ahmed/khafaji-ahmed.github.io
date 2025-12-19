'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Mail, Code2, Rocket, Globe } from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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

export default function Home() {
  return (
    <Layout>
      <div className="space-y-32">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col justify-center">
          <motion.div 
            variants={stagger}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-unbounded font-bold tracking-tight mb-8 leading-[1.1] gradient-text"
            >
              Architecting Digital <br />
              <span className="text-white">Futures.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10"
            >
              I&apos;m Ahmed, a Software Engineer and Founder dedicated to building high-performance applications with exceptional user experiences.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-zinc-200 px-8 h-14 text-base font-semibold">
                Explore Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/khafaji-ahmed" },
                  { icon: <Linkedin size={20} />, href: "#" },
                  { icon: <Twitter size={20} />, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="w-14 h-14 flex items-center justify-center rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
              <div className="relative glass rounded-3xl p-8 border-zinc-800 rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image 
                  src="/selfie.png" 
                  alt="Ahmed" 
                  width={400} 
                  height={400} 
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid Features */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 glass rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <Code2 className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Engineering Excellence</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Specializing in React, Next.js, and TypeScript to build scalable, 
                  type-safe applications that stand the test of time.
                </p>
              </div>
              <div className="flex gap-4 mt-8 flex-wrap">
                {['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL'].map(tech => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass rounded-[2.5rem] p-10 flex flex-col justify-between bg-zinc-900/50"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <Rocket className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Founder Mindset</h3>
                <p className="text-zinc-400">
                  I don&apos;t just write code; I build products that solve real problems.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass rounded-[2.5rem] p-10 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <Globe size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
                <p className="text-zinc-400">
                  Crafting experiences for users worldwide with a focus on accessibility and performance.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 glass rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 bg-gradient-to-br from-zinc-900 to-black"
            >
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">View My Resume</h3>
                <p className="text-zinc-400 text-lg mb-8">
                  A detailed look at my professional journey, skills, and accomplishments.
                </p>
                <Button variant="outline" className="rounded-full h-12 px-8 border-zinc-800" asChild>
                  <a href="/resume">Download CV</a>
                </Button>
              </div>
              <div className="relative w-full md:w-1/3 aspect-square rounded-2xl bg-zinc-800/30 border border-zinc-700/50 overflow-hidden flex items-center justify-center">
                 <Mail size={64} className="text-zinc-700" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20">
          <div className="relative glass rounded-[3rem] p-12 md:p-24 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-7xl font-bold mb-8 relative z-10">
              Let&apos;s build something <br />
              <span className="text-zinc-500 underline decoration-blue-500">extraordinary.</span>
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12 relative z-10">
              Have an idea or a project in mind? I&apos;m always open to discussing new opportunities.
            </p>
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-zinc-200 px-12 h-16 text-lg font-bold relative z-10" asChild>
              <a href="mailto:ahmedkhafaji11@gmail.com">Start a Conversation</a>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
