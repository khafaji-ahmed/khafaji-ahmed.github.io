'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Get nav and navlinks elements
    const nav = document.querySelector('.mobile-nav');
    const navlinks = document.querySelectorAll('.mobile-navlink');
    
    if (!isMenuOpen) {
      // Opening menu
      navlinks.forEach((link) => {
        (link as HTMLElement).style.display = 'block';
      });
      
      // Create GET IN TOUCH button for mobile menu
      const getInTouchButton = document.createElement('button');
      getInTouchButton.className = 'bg-[var(--first-color)] text-[var(--fourth-color)] font-semibold border-none py-4 px-6 rounded-full cursor-pointer hover:bg-[var(--second-color)] transition-colors duration-1000 block my-3 mx-0 text-center mobile-navlink';
      getInTouchButton.style.fontFamily = 'var(--font-family-montserrat)';
      getInTouchButton.textContent = 'GET IN TOUCH';
      getInTouchButton.onclick = function () {
        window.location.href = 'mailto:ahmedkhafaji11@gmail.com';
      };
      nav?.appendChild(getInTouchButton);
    } else {
      // Closing menu
      navlinks.forEach((link) => {
        (link as HTMLElement).style.display = 'none';
      });
      
      // Remove existing GET IN TOUCH button
      const existingButton = nav?.querySelector('button');
      if (existingButton) {
        existingButton.remove();
      }
    }
  };

  return (
    <div className="min-h-screen font-dm-sans">
      <div className="p-5 px-[8%] mb-24">
        {/* Header Section */}
        <section>
          <div className={`flex justify-between items-center mb-16 ${isMenuOpen ? 'menu-open' : ''}`}>
            {/* Name */}
            <motion.h1 
              className="text-2xl font-semibold text-[var(--first-color)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              Ahmed
            </motion.h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <motion.div 
                className="mx-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Link href="/" className="text-[var(--third-color)] no-underline mx-2 hover:text-[var(--second-color)] transition-colors duration-1000">
                  Home
                </Link>
              </motion.div>
              <motion.div 
                className="mx-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <Link href="/about" className="text-[var(--third-color)] no-underline mx-2 hover:text-[var(--second-color)] transition-colors duration-1000">
                  About
                </Link>
              </motion.div>
              <motion.div 
                className="mx-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.0 }}
              >
                <Link href="/resume" className="text-[var(--third-color)] no-underline mx-2 hover:text-[var(--second-color)] transition-colors duration-1000">
                  Resume
                </Link>
              </motion.div>
            </div>

            {/* Get in Touch Button (Desktop) */}
            <motion.button
              onClick={() => window.location.href = 'mailto:ahmedkhafaji11@gmail.com'}
              className="hidden md:block bg-[var(--first-color)] text-[var(--fourth-color)] font-semibold border-none py-4 px-6 rounded-full cursor-pointer hover:bg-[var(--second-color)] transition-colors duration-1000"
              style={{ fontFamily: 'var(--font-family-montserrat)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              GET IN TOUCH
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden bg-transparent border-none cursor-pointer p-2 relative z-20"
              aria-label="Toggle Menu"
            >
              <span className={`block w-6 h-[3px] bg-[#fcfaf4] transition-all duration-300 ${isMenuOpen ? 'rotate-[-45deg] translate-x-[-5px] translate-y-[6px]' : ''}`}></span>
              <span className={`block w-6 h-[3px] bg-[#fcfaf4] transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-[3px] bg-[#fcfaf4] transition-all duration-300 mt-1 ${isMenuOpen ? 'rotate-45 translate-x-[-5px] translate-y-[-6px]' : ''}`}></span>
            </button>

            {/* Mobile Navigation Menu */}
            <div className={`mobile-nav md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center justify-end w-[30vw] h-auto p-2 absolute top-20 right-20 bg-[var(--tile-color)] z-10 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.7)]`}>
              <div className="mobile-navlink block my-3 mx-0 text-center text-[#fcfaf4] no-underline">
                <Link href="/" className="text-[#fcfaf4] no-underline">Home</Link>
              </div>
              <div className="mobile-navlink block my-3 mx-0 text-center text-[#fcfaf4] no-underline">
                <Link href="/about" className="text-[#fcfaf4] no-underline">About</Link>
              </div>
              <div className="mobile-navlink block my-3 mx-0 text-center text-[#fcfaf4] no-underline">
                <Link href="/resume" className="text-[#fcfaf4] no-underline">Resume</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        {children}
      </div>
    </div>
  );
} 