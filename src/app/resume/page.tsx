'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

export default function Resume() {
  const resumePartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.8, // Start after navbar animations
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-10 p-5 md:p-8 lg:p-10 max-w-none lg:max-w-[1400px] lg:mx-auto font-dm-sans">
        {/* Sidebar */}
        <section className="w-full md:w-[35%] md:min-w-[300px] lg:min-w-[350px] lg:max-w-[400px] flex-shrink-0 order-1 md:order-none">
          <motion.div 
            className="bg-[var(--tile-color)] rounded-2xl p-8 lg:p-12 flex flex-col justify-start items-center md:items-start text-center md:text-left box-border overflow-hidden h-auto min-h-[320px] md:min-h-[400px] lg:min-h-[500px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <Image 
              src="/selfie.png" 
              alt="Selfie" 
              className="rounded-full w-20 h-20 md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]" 
              width={120} 
              height={120} 
              unoptimized 
            />
            <h1 className="text-2xl lg:text-[28px] mt-4 lg:mt-5 mb-2 lg:mb-3">Ahmed Khafaji</h1>
            <h3 className="text-base lg:text-lg mb-4 lg:mb-5">Founder & Lead Engineer</h3>
            <p className="mb-2 -mb-2">ahmedkhafaji11@gmail.com</p>
            <p className="text-sm text-[#666]">647-765-6229 | Toronto, Canada</p>
            <motion.button
              onClick={() => window.location.href = 'mailto:ahmedkhafaji11@gmail.com'}
              className="bg-[var(--first-color)] text-[var(--fourth-color)] font-semibold border-none rounded-full cursor-pointer hover:bg-[var(--second-color)] transition-colors duration-1000 mb-6 block text-sm md:text-base py-3 px-4 md:py-4 md:px-5 text-center mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              Contact me
            </motion.button>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="w-full md:w-[65%] p-0 flex-1 overflow-x-hidden order-2 md:order-none">
          <motion.button
            className="w-full bg-[var(--first-color)] text-[var(--fourth-color)] font-semibold border-none rounded-full cursor-pointer hover:bg-[var(--second-color)] transition-colors duration-1000 mb-6 block text-sm md:text-base py-3 px-4 md:py-4 md:px-5 text-center"
            onClick={() => window.open('/resume.pdf')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            Resume PDF📃
          </motion.button>
          
          <motion.div 
            className="text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* About Me Section */}
            <motion.div variants={resumePartVariants}>
              <h1 className="text-xl md:text-2xl mb-4 md:mb-5">A little about me</h1>
              <p className="text-sm md:text-base lg:text-base leading-relaxed mb-5 md:mb-10">
                I&apos;m a seasoned software engineer and founder of CAYDE SERVICES INC., a Canadian software company delivering government and enterprise-scale solutions. I&apos;ve bootstrapped and led development of scalable applications including yuMeet (55k+ users), enterprise billing systems, and government platforms, with deep expertise in React, Next.js, Node.js, PostgreSQL, and modern DevOps practices.
              </p>
            </motion.div>
            
            {/* Experience Section */}
            <motion.div variants={resumePartVariants}>
              <h1 className="text-xl md:text-2xl mb-4 md:mb-5">Experience</h1>
              
              <div className="mb-6 md:mb-8">
                <h1 className="text-base md:text-lg lg:text-xl leading-tight text-[var(--second-color)] mb-1">Founder & Lead Engineer @ CAYDE SERVICES INC.</h1>
                <h4 className="mt-0 text-sm md:text-base mb-2 md:mb-3 text-[var(--third-color)]">2022 - Present</h4>
                <p className="text-sm md:text-base lg:text-base leading-relaxed mb-5 md:mb-10">Bootstrapped and led a Canadian software company delivering government and campus-scale solutions. Built and scaled yuMeet, a university social platform with real-time messaging and event matchmaking. Oversaw technical architecture, hiring, partnerships, and go-to-market strategy.</p>
              </div>
              
              <div className="mb-6 md:mb-8">
                <h1 className="text-base md:text-lg lg:text-xl leading-tight text-[var(--second-color)] mb-1">Senior Full-Stack Developer @ Wood Manufacturer</h1>
                <h4 className="mt-0 text-sm md:text-base mb-2 md:mb-3 text-[var(--third-color)]">Feb 2024 - Present</h4>
                <p className="text-sm md:text-base lg:text-base leading-relaxed mb-5 md:mb-10">Led a team of 5 developers in refactoring an internal system using PHP and JavaScript, improving performance by 40%. Architected and optimized database structures, reducing query times by 30%. Enhanced system security and mentored junior developers.</p>
              </div>
              
              <div className="mb-6 md:mb-8">
                <h1 className="text-base md:text-lg lg:text-xl leading-tight text-[var(--second-color)] mb-1">Senior Full-Stack Developer & Team Lead @ Lightring AI</h1>
                <h4 className="mt-0 text-sm md:text-base mb-2 md:mb-3 text-[var(--third-color)]">Nov 2022 - Present</h4>
                <p className="text-sm md:text-base lg:text-base leading-relaxed mb-5 md:mb-10">Directed development of critical projects for government and healthcare sectors, increasing client retention by 15%. Introduced CI/CD pipelines and DevOps practices, reducing deployment times by 50%. Led multi-platform app development boosting workflow efficiency by 25%.</p>
              </div>
            </motion.div>

            {/* Projects Section */}
            <motion.div className="mt-5" variants={resumePartVariants}>
              <h1 className="text-xl md:text-2xl mb-4 md:mb-5">Key Projects</h1>
              
              <div className="mb-6 md:mb-8">
                <h1 className="text-base md:text-lg lg:text-xl leading-tight text-[var(--second-color)] mb-1">yuMeet - Campus Social App</h1>
                <h4 className="mt-0 text-sm md:text-base mb-2 md:mb-3 text-[var(--third-color)]">2022 - Present</h4>
                <p className="text-sm md:text-base lg:text-base leading-relaxed mb-5 md:mb-10">Led development of a scalable matchmaking and messaging platform for York University students, supporting 55k+ users with real-time messaging, user verification, and personalized recommendations.</p>
              </div>
              
              <div className="mb-6 md:mb-8">
                <h1 className="text-base md:text-lg lg:text-xl leading-tight text-[var(--second-color)] mb-1">Enterprise Billing System</h1>
                <h4 className="mt-0 text-sm md:text-base mb-2 md:mb-3 text-[var(--third-color)]">2024</h4>
                <p className="text-sm md:text-base lg:text-base leading-relaxed mb-5 md:mb-10">Architected and developed a scalable billing system for the Iraq government, processing over 100k daily transactions with microservices architecture ensuring 99.9% uptime.</p>
              </div>
              
              <div className="mb-6 md:mb-8">
                <h1 className="text-base md:text-lg lg:text-xl leading-tight text-[var(--second-color)] mb-1">Government E-Visa Platform</h1>
                <h4 className="mt-0 text-sm md:text-base mb-2 md:mb-3 text-[var(--third-color)]">2023</h4>
                <p className="text-sm md:text-base lg:text-base leading-relaxed mb-5 md:mb-10">Built comprehensive visa application system for Iraq ministry, reducing application processing time by 40% and engaging 50k+ monthly users.</p>
              </div>
              
              <div className="mb-6 md:mb-8">
                <h1 className="text-base md:text-lg lg:text-xl leading-tight text-[var(--second-color)] mb-1">Real-Time E-Commerce Auction Platform</h1>
                <h4 className="mt-0 text-sm md:text-base mb-2 md:mb-3 text-[var(--third-color)]">2023</h4>
                <p className="text-sm md:text-base lg:text-base leading-relaxed mb-5 md:mb-10">Built secure, scalable auction system with real-time bidding, attracting 10k+ active users in first month and protecting over $500k in transactions.</p>
              </div>
            </motion.div>
            
            {/* Education Section */}
            <motion.div className="mb-12" variants={resumePartVariants}>
              <h1 className="text-xl md:text-2xl mb-4 md:mb-5">Education</h1>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl leading-tight text-[var(--second-color)] mb-1">York University</h1>
                <h2 className="text-[var(--third-color)] mt-1 mb-1">Bachelor of Engineering - Software Engineering</h2>
              </div>
            </motion.div>
            
            {/* Skills Section */}
            <motion.div variants={resumePartVariants}>
              <h1 className="text-xl md:text-2xl mb-4 md:mb-5">Skills</h1>
              <div className="text-[var(--third-color)] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">Python</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">JavaScript</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">TypeScript</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">Java</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">C</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">PHP</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">React</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">Next.js</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">Node.js</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">Express</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">PostgreSQL</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">MongoDB</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">Redis</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">Docker</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">Kubernetes</h1>
                <h1 className="mt-1 mb-1 text-xs md:text-sm lg:text-base">Jenkins</h1>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
} 