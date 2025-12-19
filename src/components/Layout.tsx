'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
];

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <div className="noise-bg" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-50"
          >
            <Link href="/" className="text-xl font-unbounded font-bold tracking-tighter">
              AHMED<span className="text-zinc-500">.</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <Button
              variant="outline"
              className="rounded-full border-zinc-800 hover:bg-white hover:text-black transition-all group"
              onClick={() => window.location.href = 'mailto:ahmedkhafaji11@gmail.com'}
            >
              Contact Me
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8 p-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-unbounded font-bold hover:text-zinc-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="lg"
              className="mt-8 rounded-full px-12 h-16 text-lg"
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = 'mailto:ahmedkhafaji11@gmail.com';
              }}
            >
              Get in Touch
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {children}
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-zinc-900 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} Ahmed Khafaji. Built with precision.
          </p>
          <div className="flex gap-6">
            {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
