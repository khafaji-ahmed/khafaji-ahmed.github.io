'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout as LayoutIcon, Cpu, Layers } from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

const processSteps = [
  {
    title: "Archetype",
    icon: <LayoutIcon className="w-6 h-6" />,
    desc: "Defining the core visual and structural identity through conceptual wireframing and design-led strategy."
  },
  {
    title: "Blueprint",
    icon: <Layers className="w-6 h-6" />,
    desc: "Architecting the technical stack with precision—choosing the right tools for scalability and longevity."
  },
  {
    title: "Fabrication",
    icon: <Code className="w-6 h-6" />,
    desc: "Crafting clean, type-safe, and high-performance code that brings the architectural vision to life."
  },
  {
    title: "Integration",
    icon: <Cpu className="w-6 h-6" />,
    desc: "Deployment and optimization, ensuring seamless performance across all digital environments."
  }
];

export default function Home() {
  return (
    <Layout hideFooterCTA={true}>
      <div className="editorial-container space-y-40 md:space-y-64">
        {/* Editorial Hero */}
        <section className="relative pt-10 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-6"
              >
                Based in Toronto — Software Engineer
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-6xl md:text-[10rem] font-serif font-bold leading-[0.85] tracking-tighter mb-12 text-balance"
              >
                Crafting <br />
                Digital <br />
                <span className="italic font-light text-accent">Artifacts.</span>
              </motion.h1>
            </div>
            
            <div className="lg:col-span-4 lg:pt-24">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl text-muted-foreground leading-relaxed font-sans mb-10"
              >
                Ahmed Khafaji combines architectural precision with entrepreneurial vision to build high-performance systems that define the next generation of web experience.
              </motion.p>
              
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col gap-4 items-start"
                >
                  <Button variant="link" className="p-0 h-auto text-lg font-serif italic link-underline group" asChild>
                    <a href="mailto:cayde@cayde.ca">
                      Get in touch 
                      <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </motion.div>
            </div>
          </div>
        </section>

        {/* The Portrait / Statement */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] bg-muted overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 rounded-sm">
              <Image 
                src="/selfie.png" 
                alt="Ahmed Khafaji" 
                fill 
                className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-7 order-1 lg:order-2 space-y-12"
          >
            <h2 className="text-4xl md:text-7xl font-serif leading-tight">
              A philosophy of <span className="italic">intent.</span>
            </h2>
            <div className="max-w-xl space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In an era of mass-produced code, I prioritize the artisanal. Every line is an architectural choice, every interaction a moment of brand expression.
              </p>
              <p>
                From founding startups to leading engineering teams, my focus remains constant: building scalable, type-safe, and visually arresting software that scales with your ambition.
              </p>
              <div className="pt-10 grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-sans mb-4 border-b border-border pb-2">Core Stack</h4>
                  <ul className="text-sm space-y-2 text-ink">
                    <li>Next.js / React</li>
                    <li>TypeScript / Node</li>
                    <li>PostgreSQL / Redis</li>
                    <li>AWS / Vercel</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-sans mb-4 border-b border-border pb-2">Disciplines</h4>
                  <ul className="text-sm space-y-2 text-ink">
                    <li>System Architecture</li>
                    <li>Product Strategy</li>
                    <li>UI/UX Engineering</li>
                    <li>Cloud Infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Process Section - NEW */}
        <section className="relative py-20">
          <div className="absolute inset-0 blueprint-grid opacity-30 -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-6">
              <h2 className="text-5xl font-serif italic mb-6">The Methodology</h2>
              <p className="text-muted-foreground text-lg max-w-md">
                A rigorous, four-stage approach to digital construction. From the first sketch to the final deployment.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-paper p-10 space-y-6 group hover:bg-accent hover:text-paper transition-colors duration-500"
              >
                <div className="text-accent group-hover:text-paper transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-serif italic">{step.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  {step.desc}
                </p>
                <div className="pt-4 text-[10px] uppercase tracking-widest opacity-40">
                  Phase 0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work / Index Preview */}
        <section>
          <div className="flex justify-between items-baseline mb-20 border-b border-border pb-10">
            <h2 className="text-5xl font-serif italic">Selected Works</h2>
            <a href="/resume" className="text-xs uppercase tracking-[0.3em] link-underline">View Full Index</a>
          </div>
          
          <div className="space-y-12">
            {[
              {
                title: "Venture Architecture",
                category: "Product / Strategy",
                year: "2024",
                desc: "Scaling digital products from zero to market leader with a focus on core infrastructure and performance.",
                tech: ""
              },
              {
                title: "High-Performance Systems",
                category: "Engineering",
                year: "2025",
                desc: "Designing low-latency data pipelines and distributed systems that handle millions of requests with precision.",
                tech: "Node.js, Redis, PostgreSQL, AWS"
              }
            ].map((work, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                className="group cursor-pointer relative grid grid-cols-1 lg:grid-cols-12 gap-10 py-16 border-b border-border/50 hover:border-ink transition-all duration-500"
              >
                <div className="lg:col-span-1 text-[10px] uppercase tracking-widest text-muted-foreground pt-2">
                  0{i + 1}
                </div>
                <div className="lg:col-span-8">
                  <h3 className="text-4xl md:text-7xl font-serif group-hover:italic transition-all duration-500 leading-none mb-6">{work.title}</h3>
                  
                  {work.tech && (
                    <p className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
                      [ {work.tech} ]
                    </p>
                  )}
                  
                  <p className="max-w-xl text-muted-foreground text-lg leading-relaxed">
                    {work.desc}
                  </p>
                </div>
                <div className="lg:col-span-3 lg:col-start-10 text-right text-[10px] uppercase tracking-widest pt-2">
                  <span className="block mb-2 font-bold text-ink">{work.category}</span>
                  <span className="text-muted-foreground/50">{work.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="pt-40 pb-20 border-t border-border">
            <motion.div {...fadeInUp} className="max-w-4xl">
              <h2 className="text-5xl md:text-[10rem] font-serif font-bold tracking-tighter leading-[0.8] mb-16">
                Let&apos;s Build <br /> <span className="italic font-light text-accent">Something.</span>
              </h2>
              <Button size="lg" className="rounded-none bg-ink text-paper hover:bg-accent transition-colors px-12 h-16 text-lg font-sans uppercase tracking-[0.2em]" asChild>
                <a href="mailto:cayde@cayde.ca">Initialize</a>
              </Button>
            </motion.div>
        </section>
      </div>
    </Layout>
  );
}
