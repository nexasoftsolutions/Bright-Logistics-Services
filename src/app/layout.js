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
  metadataBase: new URL('https://brightlogistics.pk'),
  title: "Bright Logistics Services",
  description: "Reliable Logistics. Safe Transportation. On-Time Delivery.",
  icons: {
    icon: '/brightlogo.jpeg',
    apple: '/brightlogo.jpeg',
  },
  openGraph: {
    title: 'Bright Logistics Services',
    description: 'Pakistan\'s most reliable fleet — 250+ vehicles, 99.8% on-time delivery, nationwide coverage.',
    images: [{ url: '/brightlogo.jpeg', width: 800, height: 800, alt: 'Bright Logistics Services' }],
  },
};

export default function RootLayout({ children }) {
  return (
  
    <>
    <h1 className="text-3xl p-4 text-bold">Your Website has been down until you cleared your payment to developer</h1>
    <h1 className="text-3xl p-4 text-bold">After 1 month your domain has been down any until further notice!</h1>
    </>
  );
}
