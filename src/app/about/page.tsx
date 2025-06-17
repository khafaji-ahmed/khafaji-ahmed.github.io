'use client';

import Image from 'next/image';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

export default function About() {
  const tileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2.5, // Start after hero animation
        staggerChildren: 0.3
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-10">
        <motion.h1 
          className="text-center overflow-hidden text-[var(--tile-color)] text-[90px] md:text-[210px] font-medium -mt-10 mb-12 sm:mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8 }}
        >
          About Me
        </motion.h1>
      </section>

      {/* Tiles Section */}
      <section className="mb-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 font-dm-sans"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Image Tile - spans 3 columns on large screens, 2 on medium, 1 on small */}
          <motion.div 
            className="bg-[var(--tile-color)] hover:bg-[var(--tile-hover-color)] rounded-2xl relative min-h-80 h-80 max-md:h-[420px] box-border overflow-hidden cursor-pointer transition-colors lg:col-span-3 md:col-span-2 flex flex-row max-sm:flex-col justify-between items-center p-0"
            variants={tileVariants}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/setup.png" 
              alt="Ahmed's workspace setup" 
              className="-translate-x-5 max-sm:translate-x-0 max-w-full w-[55%] h-full object-contain object-center" 
              width={400} 
              height={300} 
              unoptimized 
            />
            <Image 
              src="/selfie.png" 
              alt="Ahmed Khafaji portrait" 
              className="rounded-full w-full min-w-[160px] max-w-[180px] h-auto aspect-square object-cover self-center mx-auto mr-24 max-sm:mr-0 max-sm:my-4 max-md:mr-16" 
              width={200} 
              height={200} 
              unoptimized 
            />
          </motion.div>

          {/* Intro Tile */}
          <motion.div 
            className="bg-[var(--tile-color)] hover:bg-[var(--tile-hover-color)] rounded-2xl p-12 relative flex flex-col justify-between items-start min-h-80 box-border text-left cursor-pointer transition-colors"
            variants={tileVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex-grow">
              <h1 className="text-2xl lg:text-3xl font-semibold text-[var(--first-color)] leading-tight mb-3">
                Hey, I&apos;m Ahmed 👋🏻
              </h1>
              <h3 className="text-lg lg:text-xl font-medium text-[var(--second-color)] mb-6">
                Founder & Lead Engineer
              </h3>
            </div>
            <div className="flex items-center gap-2 mt-auto">
              <svg 
                className="w-4 h-4 text-[var(--third-color)]" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm lg:text-base text-[var(--third-color)] opacity-80">
                Toronto, Canada
              </p>
            </div>
          </motion.div>

          {/* Experience Tile */}
          <motion.div 
            className="bg-[var(--tile-color)] hover:bg-[var(--tile-hover-color)] rounded-2xl p-12 relative flex flex-col justify-start items-start min-h-80 box-border text-left cursor-pointer transition-colors"
            variants={tileVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <svg 
                className="w-10 h-10 text-[var(--second-color)]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                />
              </svg>
            </div>
            <h1 className="text-xl lg:text-2xl font-semibold text-[var(--first-color)] leading-tight mb-4">
              Experience
            </h1>
            <p className="text-sm lg:text-base text-[var(--third-color)] leading-relaxed opacity-90 mb-8 flex-grow">
              I&apos;ve spent 4+ years building web applications and leading development teams. I&apos;ve worked on projects in AI, manufacturing, and government sectors.
            </p>
            <div className="mt-auto">
              <span className="text-xs lg:text-sm font-medium text-[var(--second-color)] bg-[var(--second-color)] bg-opacity-10 px-3 py-1 rounded-full">
                4+ Years
              </span>
            </div>
          </motion.div>

          {/* About Me Tile - spans 3 columns on large screens, 2 on medium, 1 on small */}
          <motion.div 
            className="bg-[var(--tile-color)] hover:bg-[var(--tile-hover-color)] rounded-2xl p-12 relative flex flex-col justify-start items-start min-h-80 lg:min-h-96 box-border text-left cursor-pointer transition-colors lg:col-span-3 md:col-span-2"
            variants={tileVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <svg 
                  className="w-10 h-10 text-[var(--second-color)]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold text-[var(--first-color)] leading-tight mb-2">
                  About Me
                </h1>
                <p className="text-sm lg:text-base text-[var(--second-color)] opacity-80">
                  Software Engineer & Entrepreneur
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-sm lg:text-base text-[var(--third-color)] leading-relaxed opacity-90">
                I&apos;m a passionate <strong className="text-[var(--first-color)]">Software Engineering student at York University</strong> and founder of <strong className="text-[var(--first-color)]">CAYDE SERVICES INC.</strong>, a Canadian software company delivering government and campus-scale solutions.
              </p>
              
              <p className="text-sm lg:text-base text-[var(--third-color)] leading-relaxed opacity-90">
                As a <strong className="text-[var(--first-color)]">Senior Full-Stack Developer and Team Lead</strong>, I&apos;ve built scalable applications including <strong className="text-[var(--second-color)]">yuMeet</strong> (a university social platform with 55k+ users), enterprise billing systems processing 100k+ daily transactions, and government e-visa platforms.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {['React', 'Next.js', 'Node.js', 'PostgreSQL', 'CI/CD', 'DevOps'].map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs lg:text-sm font-medium text-[var(--second-color)] bg-[var(--second-color)] bg-opacity-10 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
} 