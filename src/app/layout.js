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
        <main className="w-full pt-20 flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Floating Action Buttons */}
        <div className="fixed right-8 flex flex-col z-50 gap-6" style={{ bottom: '120px' }}>
          <a href="tel:03000641482" className="w-14 h-14 bg-secondary-container text-on-secondary-fixed-variant rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-all hover:scale-110 group" aria-label="Call Us">
            <Phone className="w-6 h-6" />
          </a>
          <a href="https://wa.me/923000641482" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all hover:scale-110 group" aria-label="WhatsApp Us">
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </body>
    </html>
  );
}
