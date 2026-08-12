'use client';

import { useState } from 'react';
import { ArrowRight, PlayCircle, Search, Check, Truck, MapPin, PlaneTakeoff, Ship, Warehouse } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import { coreServices, infrastructureStats } from '@/data/home';

const iconMap = { PlaneTakeoff, Ship, Truck, Warehouse };

export default function Home() {

  const [trackingState, setTrackingState] = useState('idle'); // 'idle', 'loading', 'result'

  const handleTrack = () => {
    setTrackingState('loading');
    setTimeout(() => {
      setTrackingState('result');
    }, 600);
  };

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full min-h-[85vh] flex items-center justify-center -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDihZC0SI8W28lmmbfatrObuJc7kCkFmCxIwUHomwbYCQEZbEKjB1qbwrZaw6Hb3BjqA1thFRozTD-3UV7LUQE_np6CPrbq_L3rmI663o5d86-1UQgVEoS5AUA2fcckgAkxElgIWSK6yKDSdzBZhZaOmO8h9pfUFKVLu-SdlHtczoxzFwGu6Ydw8tKbZYMtoWUn_xx_Ma-WR-dHLbR0R3iv1MkdpJm0DYfb9848vvawJpyZhQxH0ZpBHw')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>
        
        <SectionContainer className="relative z-10 w-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block bg-secondary-container/20 px-4 py-1.5 rounded-full">
              <span className="font-label-bold text-label-bold text-secondary-fixed uppercase tracking-widest">Global Logistics Command</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-primary">
              Precision at Every <br /> Point of the Supply Chain.
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-lg">
              Unleash the power of a fully integrated global fleet. From warehousing to final mile, we provide the control tower for your global assets.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-bold text-label-bold uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary-fixed-variant transition-all shadow-lg flex items-center gap-2 group">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-lg font-label-bold text-label-bold uppercase tracking-wider hover:bg-surface-variant transition-all flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                View Our Fleet
              </button>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Command Center / Tracking Overlap */}
      <SectionContainer as="section" className="relative z-20 w-full -mt-24 mb-16">
        <div className="bg-surface text-on-surface rounded-xl shadow-[0_8px_30px_rgba(0,31,63,0.12)] p-6 lg:p-10 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Shipment Tracker</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Enter your waybill or tracking reference</p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-lg flex items-center bg-surface-container-low rounded-lg p-2 focus-within:bg-surface-container transition-colors shadow-inner">
              <Search className="w-5 h-5 text-outline ml-3" />
              <input 
                className="w-full bg-transparent outline-none font-body-md text-body-md text-on-surface px-4 py-2 placeholder:text-outline-variant" 
                placeholder="e.g. BL-84920485" 
                type="text" 
              />
              <button 
                onClick={handleTrack}
                disabled={trackingState === 'loading'}
                className={`bg-primary text-on-primary px-6 py-2 rounded font-label-bold text-label-bold hover:bg-secondary-container hover:text-on-secondary-fixed-variant transition-colors whitespace-nowrap ${trackingState === 'loading' ? 'opacity-75' : ''}`}
              >
                {trackingState === 'loading' ? 'Locating...' : 'Track Now'}
              </button>
            </div>
          </div>

          {/* Tracker Result */}
          {trackingState === 'result' && (
            <div className="flex flex-col gap-6 pt-6 bg-surface-container-lowest rounded-lg p-6 shadow-sm animate-[pulse-ring_0.3s_ease-out]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-label-bold text-label-bold text-outline uppercase">Status</span>
                  <p className="font-headline-md text-headline-md text-primary mt-1">In Transit</p>
                </div>
                <div className="text-right">
                  <span className="font-label-bold text-label-bold text-outline uppercase">Est. Delivery</span>
                  <p className="font-headline-sm text-headline-sm text-secondary-container mt-1">Oct 24, 14:00</p>
                </div>
              </div>
              
              {/* Stepper */}
              <div className="relative flex items-center justify-between w-full mt-4">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-surface-variant z-0 rounded-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[60%] h-1 bg-secondary-container z-0 rounded-full transition-all duration-1000" />
                
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-label-bold text-label-bold text-primary">Dispatched</span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-label-bold text-label-bold text-primary">In Transit</span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-fixed-variant flex items-center justify-center shadow-md animate-pulse">
                    <Truck className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-label-bold text-label-bold text-secondary-container">Out for Delivery</span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-surface-variant text-outline flex items-center justify-center shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-label-bold text-label-bold text-outline">Delivered</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </SectionContainer>

      {/* Core Services */}
      <section className="w-full py-16 bg-background">
        <SectionContainer>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <SectionHeading
              eyebrow="Core Solutions"
              title="Engineered for Global Scale."
              titleClassName="text-on-background"
              className="max-w-2xl"
            />
            <button className="bg-surface-container-low text-primary px-6 py-3 rounded hover:bg-surface-container transition-colors font-label-bold text-label-bold uppercase flex items-center gap-2 group shadow-sm">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {coreServices.map((service) => {
              const Icon = iconMap[service.iconName];
              return (
                <div key={service.id} className="group bg-surface text-on-surface p-8 rounded-xl shadow-sm hover:shadow-[0_8px_30px_rgba(0,31,63,0.08)] transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-surface-container-low rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                  <Icon className="w-10 h-10 text-primary mb-6 relative z-10" />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 relative z-10">{service.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex-grow relative z-10">{service.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-secondary-container font-label-bold text-label-bold uppercase tracking-wider relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    Discover More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </SectionContainer>
      </section>

      {/* Infrastructure Section */}
      <section className="w-full py-24 bg-surface-container-low">
        <SectionContainer className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-5 flex flex-col justify-center gap-8">
            <SectionHeading
              eyebrow="Infrastructure"
              title={<>A Network Built <br /> for Reliability.</>}
              titleClassName="text-on-surface mb-6"
            >
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our strategic infrastructure positions your business for success. With hubs in key economic zones, we reduce transit times and optimize supply chain resilience.
              </p>
            </SectionHeading>
            <div className="grid grid-cols-2 gap-6">
              {infrastructureStats.map(stat => (
                <div key={stat.id} className="bg-surface p-6 rounded-lg shadow-sm">
                  <span className={`font-headline-xl text-headline-xl ${stat.valueColor} block mb-2`}>{stat.value}</span>
                  <span className="font-label-bold text-label-bold text-outline uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
            <div className="col-span-2 row-span-1 bg-surface-container rounded-xl shadow-inner relative overflow-hidden flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full text-primary-fixed-dim/40" fill="currentColor" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 400">
                <circle className="text-secondary animate-pulse" cx="200" cy="150" r="4" />
                <circle className="text-secondary animate-pulse" cx="500" cy="100" r="4" />
                <circle className="text-secondary animate-pulse" cx="800" cy="200" r="4" />
                <path d="M200 150 Q 350 50, 500 100 T 800 200" fill="none" stroke="currentColor" strokeDasharray="5 5" strokeWidth="2" />
              </svg>
              <div className="relative z-10 bg-surface/90 backdrop-blur px-6 py-3 rounded-full shadow-sm flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-secondary-container" />
                <span className="font-label-bold text-label-bold text-primary tracking-widest uppercase">Live Network Active</span>
              </div>
            </div>
            <div 
              className="col-span-1 row-span-1 bg-cover bg-center rounded-xl shadow-sm" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABp-i8qUcAVy_JuNyfwwi8WupuMKNIWd3aKx6hJDRmiMACSCKqj4Suh3cmdUWLuccG1mo-YJAK_jN1gpX6xnntTE-GrImi09L5XGZdtBUJIihUG0hsHNCs8pq8N4nus7OD37rY559D5rk1ymjxF_v1Lz5Q3AQMOnJBOUFKtmhDq6WCHTqGWFlV41f2kbZqWJRd-8ys9399_BIVdvubi6ePmdog4x5IvQc0Ir9SRTBZn3EYRXa0wjCA9A')" }}
            />
            <div 
              className="col-span-1 row-span-1 bg-cover bg-center rounded-xl shadow-sm" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYGrkH7fg5H-oeCR_Y8n7at1VP9AyGwB0N7r3PCgV9rOpJCgAtYy0jpiJ_q1QHAWqonq21kjuOxyTyllZ8Mn5uX7i54aPxCOBUi-mKcAv2lVTaoqbCaakNVxZ9fCqoQMGw01m3Blvwrabw0N3jWcS7dMUm9u_5tVHCdl4VV9eZsb_4X75EK7Ljjw9My07gXTHbD_efPg7sOHKSb1ILf08ObXVocgsDPNVL2MWe7krKHAKFz7sfJOaF6g')" }}
            />
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
