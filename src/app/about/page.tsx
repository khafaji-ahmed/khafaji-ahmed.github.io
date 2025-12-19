'use client';

import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
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
            <p className="text-3xl md:text-4xl font-serif leading-snug">
              Ahmed Khafaji is a software architect and founder focused on the intersection of technical excellence and brand storytelling.
            </p>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
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

            <div className="pt-20">
              <h3 className="text-[10px] uppercase tracking-[0.4em] mb-10 border-b border-border pb-4">Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { title: "Precision", desc: "Every line of code is a design decision. I value clarity over cleverness." },
                  { title: "Velocity", desc: "Shipping is a feature. I build systems that enable rapid iteration without debt." },
                  { title: "Empathy", desc: "Software is for people. If it doesn't solve a human problem, it's just noise." },
                  { title: "Scale", desc: "Architecture must breathe. I design for tomorrow's growth, today." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-serif text-xl italic">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar / Stats */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-5 space-y-20"
          >
            <div className="aspect-square relative bg-muted grayscale">
              <Image 
                src="/selfie.png" 
                alt="Ahmed Portrait" 
                fill 
                className="object-cover"
              />
            </div>

            <div className="space-y-10">
              <h3 className="text-[10px] uppercase tracking-[0.4em] border-b border-border pb-4">In Numbers</h3>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <span className="block text-4xl font-serif font-bold">08+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Years Experience</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif font-bold">15+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Ventures Launched</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif font-bold">1M+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Users Served</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif font-bold">∞</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Curiosity</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
