import Link from 'next/link';
import { Camera, Music, MessageCircle, MapPin, Smartphone, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary pt-16 pb-8">
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <img 
              alt="Bright Logistics Logo" 
              className="h-8 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw872OjAIGUuJWkSv9jC-q3DQT58O1jxUPeZz0mJHoB_Aq3qYAEx5xiOg43vzgSwS7dkcpwE4rtOE1PIJfa7Z0IUGYxqXqL0Q1IbtiIOWL8laakBGmXKCyRpXeONBEePZib6XRGkulvYA5tsfkSMjacsmW6tpmxB5zyqs1u8HdMhmdngkCH6R_ZEqatnjzcKgjVceFKzkdv-XQ36ktpe5GHZzk7y6Fjr1aetq6gg31t7d4tAk-BdfXvQ" 
            />
            <span className="font-headline-sm text-headline-sm text-on-primary">Bright Logistics Services</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-primary-container">
            Reliable Logistics. Safe Transportation. On-Time Delivery.
          </p>
          <div className="flex gap-4">
            <a className="w-8 h-8 rounded-full bg-on-primary-fixed-variant flex items-center justify-center hover:bg-secondary-container transition-colors" href="#" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a className="w-8 h-8 rounded-full bg-on-primary-fixed-variant flex items-center justify-center hover:bg-secondary-container transition-colors" href="#" aria-label="Instagram">
              <Camera className="w-4 h-4" />
            </a>
            <a className="w-8 h-8 rounded-full bg-on-primary-fixed-variant flex items-center justify-center hover:bg-secondary-container transition-colors" href="#" aria-label="TikTok">
              <Music className="w-4 h-4" />
            </a>
            <a className="w-8 h-8 rounded-full bg-on-primary-fixed-variant flex items-center justify-center hover:bg-secondary-container transition-colors" href="https://wa.me/923000641482" aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline-sm text-headline-sm text-secondary-fixed">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            <Link className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" href="/">Home</Link>
            <Link className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" href="/services">Our Services</Link>
            <Link className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" href="/quote">Get a Quote</Link>
            <Link className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" href="/contact">Contact Us</Link>
          </nav>
        </div>
        <div className="space-y-4 lg:col-span-2">
          <h4 className="font-headline-sm text-headline-sm text-secondary-fixed">Contact Info</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary-container" />
              <p className="font-body-sm text-body-sm text-on-primary-container">Karachi, Pakistan</p>
            </div>
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-secondary-container" />
              <div>
                <p className="font-body-sm text-body-sm text-on-primary font-label-bold text-label-bold underline">Ibrar Khan (Director)</p>
                <p className="font-body-sm text-body-sm text-on-primary-container">0300-0641481</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-secondary-container" />
              <p className="font-body-sm text-body-sm text-on-primary-container">Office: 0300-0641482</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-secondary-container" />
              <p className="font-body-sm text-body-sm text-on-primary-container">info@brightlogistics.pk</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop mt-16 pt-8 border-t border-on-primary-fixed-variant/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-on-primary-container text-body-sm font-body-sm">
        <p>© 2026 Bright Logistics Services. All rights reserved.</p>
        <div className="flex items-center gap-4 font-label-bold text-label-bold uppercase tracking-widest">
          <Link className="hover:text-secondary-container transition-colors" href="#">Privacy Policy</Link>
          <Link className="hover:text-secondary-container transition-colors" href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
