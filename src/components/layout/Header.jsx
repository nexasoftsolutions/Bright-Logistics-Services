'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/coverage', label: 'Coverage' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/industries', label: 'Industries' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/clients', label: 'Clients' },
  { href: '/quote', label: 'Get a Quote' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md shadow-lg h-20">
      <div className="max-w-[1440px] mx-auto h-full px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-gutter">
        
        <Link href="/" className="flex items-center gap-4">
          <img 
            alt="Bright Logistics Logo" 
            className="h-10 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw872OjAIGUuJWkSv9jC-q3DQT58O1jxUPeZz0mJHoB_Aq3qYAEx5xiOg43vzgSwS7dkcpwE4rtOE1PIJfa7Z0IUGYxqXqL0Q1IbtiIOWL8laakBGmXKCyRpXeONBEePZib6XRGkulvYA5tsfkSMjacsmW6tpmxB5zyqs1u8HdMhmdngkCH6R_ZEqatnjzcKgjVceFKzkdv-XQ36ktpe5GHZzk7y6Fjr1aetq6gg31t7d4tAk-BdfXvQ" 
          />
          <span className="text-headline-sm text-on-primary hidden lg:inline font-headline-sm">
            Bright Logistics
          </span>
        </Link>

        <nav className="hidden xl:flex items-center h-full gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`h-full flex items-center transition-colors px-1 ${
                  isActive
                    ? 'border-b-4 border-secondary-container text-on-primary font-label-bold text-label-bold'
                    : 'text-on-primary-container hover:text-on-primary text-body-sm'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:03000641482" 
            className="bg-secondary-container text-on-secondary-fixed-variant px-6 py-2.5 rounded-full font-label-bold text-label-bold flex items-center gap-2 hover:bg-secondary transition-all"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">0300-0641482</span>
          </a>
          <button 
            className="xl:hidden text-on-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-primary shadow-lg border-t border-on-primary-fixed-variant/20 flex flex-col p-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`p-3 transition-colors ${
                pathname === link.href
                  ? 'text-secondary-container font-label-bold text-label-bold'
                  : 'text-on-primary hover:text-secondary-container text-body-md font-body-md'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
