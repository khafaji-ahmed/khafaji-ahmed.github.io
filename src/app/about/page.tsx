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
              Ahmed Khafaji is a software engineer and founder based in Toronto, specializing in the architecture of high-performance digital infrastructure.
            </p>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                Currently completing my Software Engineering degree at York University, my professional trajectory has been defined by a commitment to technical rigor and entrepreneurial action. I don&apos;t just write code; I design systems that solve structural problems at scale.
              </p>
              <p>
                From building social ecosystems for 55,000+ users to architecting financial systems for government ministries, I prioritize the durability of the &quot;blueprint.&quot; I believe that software should be engineered with the same precision as physical architecture—intentional, scalable, and resilient.
              </p>
              <p>
                Whether I&apos;m leading a development team or acting as a sole technical founder, my focus remains on reducing complexity and maximizing efficiency through clean architecture and modern engineering practices.
              </p>
            </div>

            <div className="pt-20">
              <h3 className="text-[10px] uppercase tracking-[0.4em] mb-10 border-b border-border pb-4">Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { title: "Precision", desc: "Every line of code is an architectural choice. I value structural integrity over temporary fixes." },
                  { title: "Velocity", desc: "Efficient deployment is a core feature. I build CI/CD pipelines that enable rapid, zero-downtime evolution." },
                  { title: "Impact", desc: "Software must deliver measurable value—whether it's reducing manual work by 10 hours a week or handling $2M in monthly volume." },
                  { title: "Scalability", desc: "Architecture must breathe. I design local-first and microservices-ready systems that grow with the user base." }
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
            <div className="aspect-[3/4] relative bg-muted grayscale overflow-hidden rounded-sm">
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
                  <span className="block text-4xl font-serif font-bold">55K+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Active Users</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif font-bold">$2M+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Monthly Volume</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif font-bold">100K+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Daily Transactions</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif font-bold">99.9%</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Uptime SLA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
