'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, PlayCircle, Search, Check, Truck, MapPin, PlaneTakeoff, Ship, 
  Warehouse, Anchor, Cog, Building2, Archive, Recycle, Maximize, Handshake, 
  Phone, MessageCircle,
  ShieldCheck, UserCheck, PackageCheck, Clock, Layers, Briefcase,
  Activity, Factory, Globe2, Wrench, Building,
  ClipboardList, CalendarCheck, Navigation, ArrowDownToLine, CheckCircle2
} from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import { infrastructureStats } from '@/data/home';
import { services } from '@/data/services';
import { vehicles } from '@/data/fleet';
import { CTABanner, StatsCounter, HeroSlideshow, ScrollReveal } from '@/components/ui';

const iconMap = { PlaneTakeoff, Ship, Truck, Warehouse, Anchor, Cog, Building2, Archive, Recycle, Maximize, Handshake };

export default function Home() {

  const firstFourServices = services.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full min-h-[85vh] flex items-center justify-center -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <HeroSlideshow />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>
        
        <SectionContainer className="relative z-10 w-full flex flex-col justify-center">
          <ScrollReveal className="max-w-2xl space-y-6">
            <div className="inline-block bg-secondary-container/20 px-4 py-1.5 rounded-full">
              <span className="text-label-bold text-secondary-fixed uppercase tracking-widest">Trusted by Pakistan's Leading Businesses</span>
            </div>
            <h1 className="text-headline-xl text-on-primary">
              <span className="block text-secondary-container text-headline-sm mb-2 uppercase tracking-widest font-bold">BRIGHT LOGISTICS SERVICES</span>
              Moving Your Business Forward.
            </h1>
            <p className="text-body-lg text-on-primary-container max-w-lg">
              Unleash the power of a fully integrated global fleet. From warehousing to final mile, we provide the control tower for your global assets.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/quote" className="bg-primary text-on-primary px-8 py-4 rounded-lg text-label-bold uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary-fixed-variant transition-all shadow-lg flex items-center gap-2 group">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/923000641482?text=Hello%20Bright%20Logistics%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20transportation%20services." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-label-bold uppercase tracking-wider hover:bg-[#1da851] transition-all flex items-center gap-2 shadow-lg">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </SectionContainer>
      </section>

      {/* 24/7 Dispatch Overlap */}
      <SectionContainer as="section" id="dispatch" className="relative z-20 w-full -mt-24 mb-16">
        <ScrollReveal delay={200} className="bg-surface text-on-surface rounded-xl shadow-[0_8px_30px_rgba(0,31,63,0.12)] p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border-l-4 border-secondary-container">
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
        </ScrollReveal>
      </SectionContainer>

      {/* About Section */}
      <section className="w-full py-12 lg:py-16 bg-background">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="About Bright Logistics"
                title="Your Trusted Partner in Transportation."
                titleClassName="text-on-background mb-6"
              >
                <p className="text-body-md text-on-surface-variant mb-6">
                  At Bright Logistics Services, we are committed to moving your business forward with reliable, efficient, and secure transportation solutions. With a robust fleet and dedicated professionals, we handle everything from local deliveries to nationwide distribution.
                </p>
                <Link href="/about" className="bg-surface-container-low text-primary px-6 py-3 rounded hover:bg-surface-container transition-colors text-label-bold uppercase flex items-center gap-2 group shadow-sm w-fit">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </SectionHeading>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" alt="About Bright Logistics" fill className="object-cover" />
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 lg:py-16 bg-surface-container-lowest">
        <SectionContainer>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Delivering Excellence Every Time."
            titleClassName="text-on-background mb-10 text-center"
            className="flex flex-col items-center"
          />
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Reliable Transportation", icon: ShieldCheck },
                { title: "Professional Coordination", icon: UserCheck },
                { title: "Safe Cargo Handling", icon: PackageCheck },
                { title: "Timely Service", icon: Clock },
                { title: "Flexible Solutions", icon: Layers },
                { title: "Business-Focused Support", icon: Briefcase }
              ].map((feature, idx) => (
                <div key={idx} className="bg-surface p-6 rounded-xl shadow-sm flex items-start gap-4">
                  <feature.icon className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="text-headline-sm text-on-surface mb-2">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </SectionContainer>
      </section>

      {/* Industries We Serve Strip */}
      <section className="w-full py-8 bg-primary text-on-primary">
        <SectionContainer>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-headline-sm whitespace-nowrap">Industries We Serve:</h3>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {[
                { name: "Healthcare", icon: Activity },
                { name: "Manufacturing", icon: Factory },
                { name: "Import/Export", icon: Globe2 },
                { name: "Warehousing", icon: Warehouse },
                { name: "Industrial", icon: Wrench },
                { name: "Construction", icon: Building },
                { name: "Corporate", icon: Briefcase }
              ].map((ind, idx) => (
                <div key={idx} className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                  <ind.icon className="w-5 h-5" />
                  <span className="text-label-lg font-medium">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

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
          
          <ScrollReveal delay={150}>
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
          </ScrollReveal>
        </SectionContainer>
      </section>

      {/* Our Fleet (Preview) */}
      <section className="w-full py-12 lg:py-16 bg-surface-container-lowest">
        <SectionContainer>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <SectionHeading
              eyebrow="Our Fleet"
              title="Equipped for Any Challenge."
              titleClassName="text-on-background"
            />
            <Link href="/fleet" className="bg-surface-container-low text-primary px-6 py-3 rounded hover:bg-surface-container transition-colors text-label-bold uppercase flex items-center gap-2 group shadow-sm">
              View Entire Fleet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.slice(0, 3).map((vehicle) => (
              <div key={vehicle.id} className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image src={vehicle.imageUrl} alt={vehicle.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-headline-sm text-on-surface mb-2">{vehicle.name}</h3>
                  <p className="text-body-sm text-on-surface-variant mb-4">{vehicle.description}</p>
                  <div className="flex items-center gap-2 text-label-md text-secondary-container">
                    <Truck className="w-4 h-4" /> Capacity: {vehicle.capacity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* How We Work */}
      <section className="w-full py-12 lg:py-16 bg-background">
        <SectionContainer>
          <SectionHeading
            eyebrow="Process"
            title="How We Work"
            titleClassName="text-on-background mb-12 text-center"
            className="flex flex-col items-center"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: "1", title: "Request Quote", icon: ClipboardList },
              { step: "2", title: "Planning", icon: CalendarCheck },
              { step: "3", title: "Deployment", icon: Truck },
              { step: "4", title: "Transportation", icon: Navigation },
              { step: "5", title: "Delivery", icon: ArrowDownToLine },
              { step: "6", title: "Confirmation", icon: CheckCircle2 }
            ].map((process, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4 relative z-10 group-hover:scale-110 transition-transform shadow-sm">
                  <process.icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary-container text-white text-xs flex items-center justify-center font-bold">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-label-lg font-bold text-on-surface">{process.title}</h4>
                {idx < 5 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-surface-container -z-0" />
                )}
              </div>
            ))}
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
