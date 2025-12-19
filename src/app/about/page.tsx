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
            <p className="text-3xl md:text-4xl font-serif leading-snug">
              Ahmed Khafaji is a software engineer based in Toronto, specializing in high-stakes systems and mission-critical infrastructure.
            </p>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                My approach to engineering is structural. Whether building the yuMeet campus platform for 55,000+ users at York University or architecting billing systems for national ministries, I prioritize resilience, scalability, and speed.
              </p>
              <p>
                I believe that software engineering is a discipline of authority. It requires the precision of a mathematician and the vision of an architect. This philosophy has led me to manage end-to-end product lifecycles, from technical architecture to securing high-level partnerships.
              </p>
              <p>
                Currently, I am modernizing legacy systems and leading technical migrations that enable future-proof scalability for enterprise-scale operations.
              </p>
            </div>

            <div className="pt-20">
              <h3 className="text-[10px] uppercase tracking-[0.4em] mb-10 border-b border-border pb-4">Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { title: "Structural Integrity", desc: "Software must be built to last. I prioritize robust type-safety and modular architecture over temporary fixes." },
                  { title: "Operational Velocity", desc: "Reducing friction is a feature. I design CI/CD pipelines that cut deployment times in half." },
                  { title: "Human-Centric Tech", desc: "Even the most complex backend serves a human need. I build for clarity and ease of use." },
                  { title: "Local-First Scale", desc: "Architecture should be resilient. I favor offline-sync and edge-ready designs." }
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
            <div className="aspect-square relative bg-muted grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="/selfie.png" 
                alt="Ahmed Portrait" 
                fill 
                className="object-cover"
              />
            </div>

            <div className="space-y-10">
              <h3 className="text-[10px] uppercase tracking-[0.4em] border-b border-border pb-4">Impact in Numbers</h3>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <span className="block text-4xl font-serif font-bold">55K+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Active Users</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif font-bold">$2M+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Monthly Transactions</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif font-bold">99.9%</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Uptime SLA</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif font-bold">30%</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Latency Reduction</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
