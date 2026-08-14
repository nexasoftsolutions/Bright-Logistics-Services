import { Route, Building2, Factory, Building, Warehouse, Tractor, Truck, Package, MapPin } from 'lucide-react';
import { hubs } from '@/data/hubs';
import { SectionContainer } from '@/components/ui';
import DynamicMap from '@/components/ui/DynamicMap';

const IconMap = {
  Route, Building2, Factory, Building, Warehouse, Tractor, Truck, Package, MapPin
};

export default function Coverage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-primary text-on-primary py-12 lg:py-32 overflow-hidden flex items-center justify-center min-h-[409px]">
        <div className="absolute inset-0 z-0">
          <div 
            className="bg-cover bg-center w-full h-full opacity-60 mix-blend-luminosity" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCn9AC5Do4gCMwWSzzoy50MQ-cysRXbb_PUH24ZqmD7awvsPAW6uJFt4VkGWC1jrL_wO55MhrS03IK7TDBk14n2dzC-0uWdnIfpxe42cXRD1Ntpp5K1Z21y21hhRAff1CCa05xGa72J2QtwfVbXt8FS80Ns1cpSCDV7IEJNUYwXag2PZCtRVsGAIY-SWkwCscoQxVZFU2bBeB0VArXck__xCBZr9ffK1tI79CKk_wIfF0HBXf3yS-VaHA")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop w-full text-center space-y-6 mt-20">
          <span className="font-label-bold text-secondary-container bg-secondary-container/20 px-4 py-1 rounded-full uppercase tracking-widest text-xs">
            Nationwide Coverage
          </span>
          <h1 className="font-headline-xl text-on-primary text-center">
            <span className="block text-3xl">Our Transportation</span> 
            <span className="text-secondary-container">Coverage</span>
            <div className="flex justify-center mt-2">
              <svg width="120" height="8" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C20 2 40 2 60 4C80 6 100 6 118 2" stroke="#fd8b00" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </h1>
          <p className="font-body-lg text-on-primary-container max-w-2xl mx-auto">
            Reliable logistics solutions connecting Karachi to major hubs and remote destinations across the country.
          </p>
        </div>
      </section>

      {/* Introduction / Stats Section */}
      <section className="py-12 md:py-24 bg-surface text-on-surface">
        <SectionContainer className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative">
              <div 
                className="absolute -top-12 -left-8 text-9xl font-headline-xl text-primary-fixed-dim/20 z-0 pointer-events-none" 
                style={{ writingMode: 'vertical-rl' }}
              >
                ROUTES
              </div>
              <div className="relative z-10 space-y-6">
                <h2 className="font-headline-lg text-primary">Extensive Route Network</h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Our strategic location in Karachi serves as the primary gateway for all major domestic freight operations. We utilize optimized supply chain corridors to ensure swift, secure, and cost-effective delivery across Pakistan.
                </p>
                <div className="bg-surface-container rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-container/20 text-secondary-container rounded-full flex items-center justify-center shrink-0">
                    <Route className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-primary mb-2">Real-Time Optimization</h4>
                    <p className="font-body-sm text-on-surface-variant">
                      Our fleet operations center continuously monitors road conditions, traffic patterns, and weather to route cargo along the most efficient paths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* SVG Map Container */}
            <div className="relative h-[600px] bg-primary-container rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
              <div 
                className="absolute w-full h-full bg-cover bg-center mix-blend-luminosity opacity-60" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxqMR0Vg7gu483jSlIvCYfNio9kt4JtlPWYXc6a_IT0ZHO2iQuDPK3vpXyI3hkjDDdW268zl9P_-ox8sE4wxViqDQc_RO1_YHmb286Dum9PIerm4_lGNDuFfFzWsYpPpcD6Iw-J9Bkbx0yhvUinshGPjBNVw1TZhuztCvcP4X68BlTLy85O0rHcFVsQ-4vCy1sKNhnUdY-0IYGF4w0miKkFp4gVC46AJQXpEWNvEEoQA_xfP_ebbznvQ')" }}
              />
              <DynamicMap />
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Global & Domestic Network Map Section */}
      <section className="py-12 md:py-24 bg-surface-container text-on-surface relative overflow-hidden">
        <div className="absolute -right-32 top-0 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl" />
        <SectionContainer className="relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-primary">Major Hubs &amp; Destinations</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              We maintain dedicated infrastructure and localized support across key commercial centers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hubs.map(hub => {
              const HubIcon = IconMap[hub.iconName];
              return (
                <div key={hub.id} className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant/30 hover:border-primary hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    {HubIcon && <HubIcon className={`w-6 h-6 ${hub.iconColorClass}`} />}
                    <h3 className="font-headline-sm text-primary">{hub.name}</h3>
                  </div>
                  <p className="font-body-sm text-on-surface-variant">{hub.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-primary text-on-primary rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="absolute -left-12 -top-12 w-32 h-32 bg-secondary-container/20 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h4 className="font-headline-md mb-2">And Beyond...</h4>
              <p className="font-body-sm text-on-primary-container">
                We service countless other remote and localized destinations across Pakistan, including Nowshera, Talagang, and interior Sindh.
              </p>
            </div>
            <a className="relative z-10 shrink-0 bg-secondary-container text-on-secondary-fixed-variant px-8 py-3 rounded-full font-label-bold hover:bg-secondary hover:text-white transition-colors" href="#">
              Request Custom Route
            </a>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
