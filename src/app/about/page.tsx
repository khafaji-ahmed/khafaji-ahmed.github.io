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
              Ahmed Khafaji is a structuralist in a digital age. Based in Toronto, he designs systems that possess the permanence of stone and the fluidity of light.
            </p>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed max-w-2xl font-light">
              <p>
                Engineering is a discipline of authority. Whether architecting the yuMeet campus ecosystem for 55,000+ users or building national-scale billing infrastructure for ministries, Ahmed treats code as a physical material—something to be carved, reinforced, and polished.
              </p>
              <p>
                His approach is defined by structural integrity. It is the belief that a system’s beauty is found in its resilience. By migrating monolithic chaos into the precision of microservices and streamlining $2M+ monthly transaction volumes, he creates digital monuments that stand the test of operational gravity.
              </p>
              <p>
                He does not simply write software; he architects environments where technology and human utility coexist in a state of high-performance equilibrium.
              </p>
            </div>

            <div className="pt-24 border-t border-border/50">
              <h3 className="text-[10px] uppercase tracking-[0.5em] mb-12 text-muted-foreground">The Manifesto</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  { title: "Structuralism", desc: "Code is infrastructure. I prioritize type-safety and modularity as the foundational load-bearing walls of any system." },
                  { title: "Kinetic Efficiency", desc: "Friction is the enemy of progress. I design CI/CD pipelines and deployment flows that move with intentional velocity." },
                  { title: "Digital Tactility", desc: "Even the most complex backend must feel intuitive. I build for the human on the other side of the screen." },
                  { title: "Edge Resilience", desc: "True architecture is local-first. Systems must remain standing even when the network fails." }
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
                  alt="Ahmed Profile" 
                  fill 
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-zinc-300 -z-10" />
            </div>

            <div className="space-y-12">
              <h3 className="text-[10px] uppercase tracking-[0.5em] border-b border-border pb-4 text-muted-foreground">Operational Impact</h3>
              <div className="grid grid-cols-1 gap-12">
                <div>
                  <span className="block text-5xl font-serif font-light mb-1">55K<span className="text-sm align-top italic">+</span></span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Human Connections via yuMeet</span>
                </div>
                <div>
                  <span className="block text-5xl font-serif font-light mb-1">$2M<span className="text-sm align-top italic">+</span></span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Monthly Fiscal Flow Processed</span>
                </div>
                <div>
                  <span className="block text-5xl font-serif font-light mb-1">99.9<span className="text-sm align-top italic">%</span></span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Architectural Uptime Guarantee</span>
                </div>
              </div>
            </div>

            <div className="p-8 border border-border bg-zinc-50/50 italic text-sm text-muted-foreground font-serif leading-relaxed">
              "To build is to commit. Every line of code is an architectural decision that dictates the future of the system."
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
