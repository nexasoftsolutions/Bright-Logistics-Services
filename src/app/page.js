'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PlayCircle, Search, Check, Truck, MapPin, PlaneTakeoff, Ship, Warehouse, Anchor, Cog, Building2, Archive, Recycle, Maximize, Handshake, Phone, MessageCircle } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import { infrastructureStats } from '@/data/home';
import { services } from '@/data/services';
import { CTABanner, StatsCounter } from '@/components/ui';

const iconMap = { PlaneTakeoff, Ship, Truck, Warehouse, Anchor, Cog, Building2, Archive, Recycle, Maximize, Handshake };

export default function Home() {

  const firstFourServices = services.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full min-h-[85vh] flex items-center justify-center -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>
        
        <SectionContainer className="relative z-10 w-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block bg-secondary-container/20 px-4 py-1.5 rounded-full">
              <span className="text-label-bold text-secondary-fixed uppercase tracking-widest">Trusted by Pakistan's Leading Businesses</span>
            </div>
            <h1 className="text-headline-xl text-on-primary">
              Pakistan's Most Reliable Fleet.<br />Your Cargo, Delivered.
            </h1>
            <p className="text-body-lg text-on-primary-container max-w-lg">
              Unleash the power of a fully integrated global fleet. From warehousing to final mile, we provide the control tower for your global assets.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/quote" className="bg-primary text-on-primary px-8 py-4 rounded-lg text-label-bold uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary-fixed-variant transition-all shadow-lg flex items-center gap-2 group">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#dispatch" className="bg-surface-container-lowest text-primary px-8 py-4 rounded-lg text-label-bold uppercase tracking-wider hover:bg-surface-variant transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" />
                24/7 Dispatch
              </a>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 24/7 Dispatch Overlap */}
      <SectionContainer as="section" id="dispatch" className="relative z-20 w-full -mt-24 mb-16">
        <div className="bg-surface text-on-surface rounded-xl shadow-[0_8px_30px_rgba(0,31,63,0.12)] p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border-l-4 border-secondary-container">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-container"></span>
              </span>
              <span className="text-label-bold text-secondary-container uppercase tracking-widest">Live 24/7 Support</span>
            </div>
            <h2 className="text-headline-sm text-on-surface mb-2">Operations & Dispatch Hotline</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl">
              Need immediate transport or have an urgent cargo inquiry? Our dispatch team is available round-the-clock to coordinate your logistics and provide instant solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <a href="tel:+923000641482" className="bg-primary text-on-primary px-6 py-4 rounded-lg text-label-bold uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary-fixed-variant transition-colors flex items-center justify-center gap-2 shadow-sm">
              <Phone className="w-5 h-5" />
              0300-0641482
            </a>
            <a href="https://wa.me/923000641482" target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-6 py-4 rounded-lg text-label-bold uppercase tracking-wider hover:bg-[#1da851] transition-colors flex items-center justify-center gap-2 shadow-sm">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </SectionContainer>

      {/* Features/Values Section */}
      <section className="w-full py-12 lg:py-16 bg-background">
        <SectionContainer>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <SectionHeading
              eyebrow="Core Solutions"
              title="Engineered for Global Scale."
              titleClassName="text-on-background"
              className="max-w-2xl"
            />
            <Link href="/services" className="bg-surface-container-low text-primary px-6 py-3 rounded hover:bg-surface-container transition-colors text-label-bold uppercase flex items-center gap-2 group shadow-sm">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {firstFourServices.map((service) => {
              const Icon = iconMap[service.iconName];
              return (
                <div key={service.id} className="group bg-surface text-on-surface p-8 rounded-xl shadow-sm hover:shadow-[0_8px_30px_rgba(0,31,63,0.08)] transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-surface-container-low rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                  {Icon && <Icon className="w-10 h-10 text-primary mb-6 relative z-10" />}
                  <h3 className="text-headline-sm text-on-surface mb-3 relative z-10">{service.title}</h3>
                  <p className="text-body-md text-on-surface-variant flex-grow relative z-10">{service.description}</p>
                  <Link href={`/quote?service=${service.id}`} className="mt-6 flex items-center gap-2 text-secondary-container text-label-bold uppercase tracking-wider relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    Get Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </SectionContainer>
      </section>

      {/* Stats/Proof Section */}
      <section className="w-full py-12 lg:py-24 bg-surface-container-low">
        <SectionContainer className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-5 flex flex-col justify-center gap-8">
            <SectionHeading
              eyebrow="Infrastructure"
              title={<>A Network Built <br /> for Reliability.</>}
              titleClassName="text-on-surface mb-6"
            >
              <p className="text-body-md text-on-surface-variant">
                Our strategic infrastructure positions your business for success. With nationwide coverage, a diverse active fleet, and verified professional drivers, we guarantee on-time deliveries and optimal supply chain resilience.
              </p>
            </SectionHeading>
            <StatsCounter stats={infrastructureStats} />
            <Link href="/coverage" className="mt-4 flex items-center gap-2 text-primary text-label-bold uppercase tracking-wider group w-fit">
              View Coverage Map <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
            <div className="col-span-2 row-span-1 bg-surface-container rounded-xl shadow-inner relative overflow-hidden flex items-center justify-center">
              <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" alt="Infrastructure" fill className="object-cover" />
              <div className="relative z-10 bg-surface/90 backdrop-blur px-6 py-3 rounded-full shadow-sm flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-secondary-container" />
                <span className="text-label-bold text-primary tracking-widest uppercase">Live Network Active</span>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-surface-container rounded-xl shadow-sm relative overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000" alt="Truck" fill className="object-cover" />
            </div>
            <div className="col-span-1 row-span-1 bg-surface-container rounded-xl shadow-sm relative overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000" alt="Warehouse" fill className="object-cover" />
            </div>
          </div>
        </SectionContainer>
      </section>
      
      <CTABanner 
        headline="Ready to Move Your Cargo?" 
        description="Get a competitive quote today — our team responds within 24 hours."
        buttonText="Get a Free Quote"
        buttonHref="/quote"
      />
    </div>
  );
}
