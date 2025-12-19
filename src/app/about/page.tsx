'use client';

import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function About() {
  return (
    <Layout>
      <div className="editorial-container">
        {/* Header */}
        <section className="mb-32">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-9xl font-serif font-bold tracking-tighter"
          >
            The <span className="italic font-light">Architect.</span>
          </motion.h1>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Narrative */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-7 space-y-12"
          >
            <p className="text-3xl md:text-5xl font-serif leading-[1.1] tracking-tight">
              Ahmed Khafaji is a software architect and founder focused on the intersection of technical excellence and brand storytelling.
            </p>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed max-w-2xl font-light">
              <p>
                My journey in technology began with a fascination for systems—how they scale, how they fail, and how they can be refined into something elegant. Today, I translate that fascination into digital products that solve complex problems for high-growth ventures.
              </p>
              <p>
                I believe that software should be as beautiful on the inside as it is on the outside. This means rigorous type-safety, modular architecture, and a relentless focus on performance. But beyond the code, I am a builder at heart, always looking for the most efficient path from idea to impact.
              </p>
              <p>
                Currently, I am exploring the boundaries of edge computing and AI integration, seeking ways to make the digital world feel more responsive and human.
              </p>
            </div>

            <div className="pt-24 border-t border-border/50">
              <h3 className="text-[10px] uppercase tracking-[0.5em] mb-12 text-muted-foreground">Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  { title: "Precision", desc: "Every line of code is a design decision. I value clarity over cleverness." },
                  { title: "Velocity", desc: "Shipping is a feature. I build systems that enable rapid iteration without debt." },
                  { title: "Empathy", desc: "Software is for people. If it doesn't solve a human problem, it's just noise." },
                  { title: "Scale", desc: "Architecture must breathe. I design for tomorrow's growth, today." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="font-serif text-2xl mb-3 group-hover:italic transition-all duration-300">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar / Visuals */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-5 space-y-24"
          >
            <div className="relative">
              <div className="aspect-[4/5] relative bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out overflow-hidden border border-border">
                <Image 
                  src="/selfie.png" 
                  alt="Ahmed Portrait" 
                  fill 
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-zinc-300 -z-10" />
            </div>

            <div className="space-y-12">
              <h3 className="text-[10px] uppercase tracking-[0.5em] border-b border-border pb-4 text-muted-foreground">In Numbers</h3>
              <div className="grid grid-cols-1 gap-12">
                <div>
                  <span className="block text-5xl font-serif font-light mb-1">08<span className="text-sm align-top italic">+</span></span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Years Experience</span>
                </div>
                <div>
                  <span className="block text-5xl font-serif font-light mb-1">15<span className="text-sm align-top italic">+</span></span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Ventures Launched</span>
                </div>
                <div>
                  <span className="block text-5xl font-serif font-light mb-1">1M<span className="text-sm align-top italic">+</span></span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Users Served</span>
                </div>
                <div>
                  <span className="block text-5xl font-serif font-light mb-1">∞</span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Curiosity</span>
                </div>
              </div>
            </div>

            <div className="p-8 border border-border bg-zinc-50/50 italic text-sm text-muted-foreground font-serif leading-relaxed">
              Let&apos;s talk.
              <div className="mt-4 not-italic font-sans text-xs space-y-2 uppercase tracking-widest">
                <a href="mailto:ahmedkhafaji11@gmail.com" className="block hover:text-accent transition-colors">ahmedkhafaji11@gmail.com</a>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" className="hover:text-accent transition-colors">Github</a>
                  <a href="https://linkedin.com" target="_blank" className="hover:text-accent transition-colors">LinkedIn</a>
                  <a href="https://x.com" target="_blank" className="hover:text-accent transition-colors">X / Twitter</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
