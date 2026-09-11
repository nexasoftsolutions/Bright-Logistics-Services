'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 ${isScrolled ? 'bg-surface shadow-lg' : 'bg-surface/95 backdrop-blur-md'}`}>
      <div className="max-w-container mx-auto h-full px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-gutter">
        
        <Link href="/" className="flex items-center gap-3">
          <img 
            alt="Bright Logistics Services" 
            className="h-28 w-auto object-contain" 
            src="/brightlogo.png" 
          />
        </Link>

        <nav className="hidden lg:flex items-center h-full gap-6">
          <Link href="/" className={`h-full flex items-center transition-colors px-1 ${pathname === '/' ? 'border-b-4 border-primary text-primary text-label-bold' : 'text-on-surface-variant hover:text-primary text-body-sm'}`}>Home</Link>
          <Link href="/about" className={`h-full flex items-center transition-colors px-1 ${pathname === '/about' ? 'border-b-4 border-primary text-primary text-label-bold' : 'text-on-surface-variant hover:text-primary text-body-sm'}`}>About Us</Link>
          
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary text-body-sm">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-surface shadow-xl rounded-b-lg border-t border-outline overflow-hidden min-w-[200px]">
              <Link href="/services" className="px-4 py-3 text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Services</Link>
              <Link href="/industries" className="px-4 py-3 text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Industries</Link>
            </div>
          </div>
          
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary text-body-sm">
              Operations <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-surface shadow-xl rounded-b-lg border-t border-outline overflow-hidden min-w-[200px]">
              <Link href="/fleet" className="px-4 py-3 text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Fleet</Link>
              <Link href="/coverage" className="px-4 py-3 text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Coverage</Link>
              <Link href="/gallery" className="px-4 py-3 text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Gallery</Link>
            </div>
          </div>

          <Link href="/blog" className={`h-full flex items-center transition-colors px-1 ${pathname === '/blog' ? 'border-b-4 border-primary text-primary text-label-bold' : 'text-on-surface-variant hover:text-primary text-body-sm'}`}>Blog</Link>
          <Link href="/quote" className={`h-full flex items-center transition-colors px-1 ${pathname === '/quote' ? 'border-b-4 border-primary text-primary text-label-bold' : 'text-on-surface-variant hover:text-primary text-body-sm'}`}>Get a Quote</Link>
          <Link href="/contact" className={`h-full flex items-center transition-colors px-1 ${pathname === '/contact' ? 'border-b-4 border-primary text-primary text-label-bold' : 'text-on-surface-variant hover:text-primary text-body-sm'}`}>Contact Us</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+923000641482" 
            className="bg-secondary-container text-on-secondary-fixed-variant px-6 py-2.5 rounded-full text-label-bold flex items-center gap-2 hover:bg-secondary transition-all"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">0300-0641482</span>
          </a>
          <button 
            className="lg:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-20 left-0 w-full bg-surface shadow-xl border-t border-outline/20 flex flex-col p-4 transition-transform duration-300 origin-top ${mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="p-3 text-on-surface hover:text-primary text-body-md border-b border-outline/10">Home</Link>
        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="p-3 text-on-surface hover:text-primary text-body-md border-b border-outline/10">About Us</Link>
        <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="p-3 text-on-surface hover:text-primary text-body-md border-b border-outline/10">Services</Link>
        <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="p-3 text-on-surface hover:text-primary text-body-md border-b border-outline/10">Industries</Link>
        <Link href="/fleet" onClick={() => setMobileMenuOpen(false)} className="p-3 text-on-surface hover:text-primary text-body-md border-b border-outline/10">Fleet</Link>
        <Link href="/coverage" onClick={() => setMobileMenuOpen(false)} className="p-3 text-on-surface hover:text-primary text-body-md border-b border-outline/10">Coverage</Link>
        <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="p-3 text-on-surface hover:text-primary text-body-md border-b border-outline/10">Gallery</Link>
        <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="p-3 text-on-surface hover:text-primary text-body-md border-b border-outline/10">Blog</Link>
        <Link href="/quote" onClick={() => setMobileMenuOpen(false)} className="p-3 text-on-surface hover:text-primary text-body-md border-b border-outline/10">Get a Quote</Link>
        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="p-3 text-on-surface hover:text-primary text-body-md">Contact Us</Link>
      </div>
    </header>
  );
}
