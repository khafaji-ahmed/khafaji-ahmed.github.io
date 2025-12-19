'use client';

import { motion } from 'framer-motion';
import { User, Code2, MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react';
import Layout from '../../components/Layout';
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

export default function About() {
  return (
    <Layout>
      <div className="space-y-24">
        {/* Hero Section */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter opacity-10 font-unbounded absolute left-1/2 -translate-x-1/2 top-20 select-none pointer-events-none w-full">
              ABOUT ME
            </h1>
            <div className="relative z-10 pt-20">
              <div className="w-32 h-32 md:w-48 md:h-48 mx-auto relative mb-8">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                <Image 
                  src="/selfie.png" 
                  alt="Ahmed portrait" 
                  width={200} 
                  height={200} 
                  className="rounded-full relative z-10 border-4 border-zinc-900 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-4"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                Ahmed Khafaji
              </motion.h2>
              <motion.p 
                className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                Software Engineer, Founder, and Digital Architect based in Toronto.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Content Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass rounded-[2.5rem] p-10 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
              <User className="text-white" />
            </div>
            <h3 className="text-2xl font-bold">The Story</h3>
            <p className="text-zinc-400 leading-relaxed">
              I am a Software Engineering student at York University and the founder of Cayde Services Inc. 
              My journey began with a passion for solving complex problems through elegant code. 
              Today, I lead development teams to build campus-scale solutions and government-grade platforms.
            </p>
            <div className="flex items-center gap-2 text-zinc-500">
              <MapPin size={16} />
              <span>Toronto, Canada</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass rounded-[2.5rem] p-10 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
              <Briefcase className="text-white" />
            </div>
            <h3 className="text-2xl font-bold">Professional Path</h3>
            <p className="text-zinc-400 leading-relaxed">
              With 4+ years of experience, I&apos;ve navigated through AI, manufacturing, and public sectors. 
              I specialize in creating high-traffic systems, including social platforms with 55k+ users 
               and billing engines processing 100k+ daily transactions.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Leadership', 'Scalability', 'Innovation'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass rounded-[2.5rem] p-10 space-y-6 md:col-span-2 bg-gradient-to-br from-zinc-900/50 to-black/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <GraduationCap className="text-zinc-500" />
                <h4 className="font-bold">Education</h4>
                <p className="text-zinc-400 text-sm">Software Engineering<br />York University</p>
              </div>
              <div className="space-y-4">
                <Code2 className="text-zinc-500" />
                <h4 className="font-bold">Tech Stack</h4>
                <p className="text-zinc-400 text-sm">Next.js, TypeScript, Node.js, PostgreSQL, AWS</p>
              </div>
              <div className="space-y-4">
                <Heart className="text-zinc-500" />
                <h4 className="font-bold">Interests</h4>
                <p className="text-zinc-400 text-sm">Product Design, AI Ethics, Open Source</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
