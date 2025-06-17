'use client';

import Image from 'next/image';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Home() {
  const handleTileClick = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  };

  const tileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.6, // Start after navbar animations
        staggerChildren: 0.3
      }
    }
  };

  return (
    <Layout>
      <section>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 font-dm-sans"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* About Tile - spans 2 columns on medium+, full width on mobile */}
          <motion.div 
            className="bg-[var(--tile-color)] hover:bg-[var(--tile-hover-color)] rounded-2xl p-12 relative flex flex-col justify-start items-start h-80 max-md:h-[280px] box-border overflow-hidden text-left cursor-pointer transition-colors md:col-span-2" 
            onClick={() => handleTileClick('/about')}
            variants={tileVariants}
            transition={{ duration: 0.8 }}
          >
            <Image 
              className="rounded-full w-full min-w-[60px] max-w-[100px] h-auto aspect-square object-cover mb-4" 
              src="/selfie.png" 
              alt="Selfie" 
              width={60} 
              height={60}
            />
            <h1 className="text-2xl lg:text-3xl font-semibold text-[var(--first-color)] leading-tight mb-2">
              Hey, I&apos;m Ahmed 👋🏻
            </h1>
            <p className="text-sm lg:text-base text-[var(--third-color)] opacity-80">
              Software Engineer & Founder
            </p>
            <svg
              className="stroke-[var(--third-color)] absolute bottom-[10%] right-[10%] translate-x-1/2 translate-y-1/2 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="none"
            >
              <path
                stroke="#c7c8c8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4.167 10h11.667M10.833 15l5-5M10.833 5l5 5"
              />
            </svg>
          </motion.div>

          {/* Resume Tile */}
          <motion.div 
            className="bg-[var(--tile-color)] hover:bg-[var(--tile-hover-color)] rounded-2xl p-12 relative flex flex-col justify-start items-start h-80 max-md:h-[280px] box-border overflow-hidden text-left cursor-pointer transition-colors" 
            onClick={() => handleTileClick('/resume')}
            variants={tileVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <svg
                className="stroke-[var(--second-color)] w-12 h-12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#f5a623"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-xl lg:text-2xl font-semibold text-[var(--first-color)] leading-tight mb-2">
              See my resume
            </h1>
            <p className="text-sm lg:text-base text-[var(--third-color)] opacity-80">
              Professional experience & skills
            </p>
            <svg
              className="stroke-[var(--third-color)] absolute bottom-[10%] right-[10%] translate-x-1/2 translate-y-1/2 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="60px"
              fill="none"
            >
              <path
                stroke="#c7c8c8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4.167 10h11.667M10.833 15l5-5M10.833 5l5 5"
              />
            </svg>
          </motion.div>

          {/* GitHub Tile */}
          <motion.div
            className="bg-[var(--tile-color)] hover:bg-[var(--tile-hover-color)] rounded-2xl p-12 relative flex flex-col justify-start items-start h-80 max-md:h-[280px] box-border overflow-hidden text-left cursor-pointer transition-colors"
            onClick={() => handleTileClick('https://github.com/khafaji-ahmed')}
            variants={tileVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <svg
                className="stroke-[var(--second-color)] fill-[var(--second-color)] w-12 h-12"
                viewBox="0 0 100 100"
                color='#f5a623ff'
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#f5a623ff"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
            </div>
            <h1 className="text-xl lg:text-2xl font-semibold text-[var(--first-color)] leading-tight mb-2">
              Look at my GitHub
            </h1>
            <p className="text-sm lg:text-base text-[var(--third-color)] opacity-80">
              Open source contributions & projects
            </p>
            <svg
              className="stroke-[var(--third-color)] absolute bottom-[10%] right-[10%] translate-x-1/2 translate-y-1/2 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="60px"
              fill="none"
            >
              <path
                stroke="#c7c8c8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4.167 10h11.667M10.833 15l5-5M10.833 5l5 5"
              />
            </svg>
          </motion.div>

          {/* Projects Tile */}
          <motion.div 
            className="bg-[var(--tile-color)] hover:bg-[var(--tile-hover-color)] rounded-2xl p-12 relative flex flex-col justify-start items-start h-80 max-md:h-[280px] box-border overflow-hidden text-left cursor-pointer transition-colors"
            variants={tileVariants}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl lg:text-2xl font-semibold text-[var(--first-color)] leading-tight mb-4">
              Projects
            </h1>
            <p className="text-sm lg:text-base text-[var(--third-color)] leading-relaxed opacity-90">
              I&apos;ve built professional projects as a lead developer. For personal projects and code samples, check out my resume!
            </p>
          </motion.div>

          {/* Languages Tile - spans 3 columns on large, 2 on medium, full width on mobile */}
          <motion.div 
            className="bg-[var(--tile-color)] hover:bg-[var(--tile-hover-color)] rounded-2xl p-12 relative flex flex-col justify-start items-start h-80 max-md:h-[280px] box-border text-left cursor-pointer transition-colors lg:col-span-3 md:col-span-2 overflow-hidden"
            variants={tileVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full flex flex-col">
              <Image
                className="w-full h-auto object-contain absolute top-0 left-0 -translate-y-[25%] opacity-90"
                src="/languages.png"
                alt="Programming Languages"
                width={300}
                height={200}
                unoptimized
              />
              <div className="absolute bottom-0 left-0 z-10">
                <h1 className="text-xl lg:text-2xl font-semibold text-[var(--first-color)] leading-tight mb-2">
                  Languages & Technologies
                </h1>
                <p className="text-sm lg:text-base text-[var(--third-color)] opacity-80">
                  Full-stack development expertise
                </p>
              </div>
              <svg
                className="stroke-[var(--third-color)] absolute bottom-[10%] right-[10%] translate-x-1/2 translate-y-1/2 w-6 h-6 z-10"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                height="60px"
                fill="none"
              >
                <path
                  stroke="#c7c8c8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4.167 10h11.667M10.833 15l5-5M10.833 5l5 5"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
