'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import CustomCursor from './CustomCursor';

const navLinks = [
  { name: 'Index', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/resume' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const normalizedPathname = pathname.replace(/\/$/, '') || '/';

    useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
      <div className="min-h-screen selection:bg-accent/20">
        <CustomCursor />
        {/* Navigation */}

      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-8",
        isScrolled ? "bg-paper/80 backdrop-blur-md py-4 border-b border-border" : "bg-transparent"
      )}>
        <div className="editorial-container flex justify-between items-baseline">
          <Link href="/" className="group">
            <span className="font-serif text-2xl font-bold tracking-tighter">Ahmed.</span>
            <span className="block h-[1px] w-0 bg-ink group-hover:w-full transition-all duration-300" />
          </Link>

            <div className="flex gap-12 items-center">
              {navLinks.map((link) => {
                const isActive = normalizedPathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className={cn(
                      "text-[10px] uppercase tracking-[0.3em] transition-all duration-300 relative group py-2",
                      isActive ? "text-ink" : "text-muted-foreground hover:text-ink"
                    )}
                  >
                    <span className="relative inline-flex flex-col items-center">
                      <span className={cn(
                        "transition-all duration-300",
                        isActive ? "font-bold" : "font-normal"
                      )}>
                        {link.name}
                      </span>
                      {/* Hidden bold text to reserve space and prevent layout shift */}
                      <span className="invisible h-0 font-bold overflow-hidden" aria-hidden="true">
                        {link.name}
                      </span>
                    </span>
                    
                    {isActive && (
                      <motion.span 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-ink"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="noise-bg min-h-screen"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Minimal Footer */}
      <footer className="py-20 border-t border-border bg-paper">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4 italic">Let&apos;s talk.</h2>
              <a href="mailto:ahmedkhafaji11@gmail.com" className="text-xl font-sans link-underline">
                ahmedkhafaji11@gmail.com
              </a>
            </div>
            
            <div className="flex gap-12 text-sm uppercase tracking-widest text-muted-foreground">
              <a href="https://github.com/khafaji-ahmed" target="_blank" className="hover:text-ink transition-colors">Github</a>
              <a href="#" className="hover:text-ink transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-ink transition-colors">X / Twitter</a>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-border flex justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>© 2025 Ahmed Khafaji</span>
            <span>Software Architect</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
