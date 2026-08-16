import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Phone, MessageCircle } from 'lucide-react';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bright Logistics Services",
  description: "Reliable Logistics. Safe Transportation. On-Time Delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-body-md text-on-background overflow-x-hidden">
        <Header />
        <main className="w-full pt-20 grow">
          {children}
        </main>
        <Footer />
        
        {/* Floating Action Buttons */}
        <div className="fixed right-8 flex flex-col z-50 gap-6" style={{ bottom: '120px' }}>
          <a href="tel:03000641482" className="w-14 h-14 bg-secondary-container text-on-secondary-fixed-variant rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-all hover:scale-110 group" aria-label="Call Us">
            <Phone className="w-6 h-6" />
          </a>
          <a href="https://wa.me/923000641482" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all hover:scale-110 group" aria-label="WhatsApp Us">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
