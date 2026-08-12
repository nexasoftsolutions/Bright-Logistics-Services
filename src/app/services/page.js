import { Ship, Anchor, Cog, Building2, Archive, Recycle, Maximize, Handshake } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import { services } from '@/data/services';

const iconMap = {
  Ship, Anchor, Cog, Building2, Archive, Recycle, Maximize, Handshake
};

export default function Services() {
  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-primary h-[500px]">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-90 mix-blend-luminosity" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEdYotzhXhHZFIVUjJL0pBGM2Ve7oa3Q6GCipAnZoW6iU9DzpAEG1Wi7b3xhUjwz-m_WD-uvYgAMRHBjyNQDz_kxWLCTesarFDL2JiPtCw_uM19AOwlQgmsuF9iD5DNSies3T26yi2c9uvF3VF3EByxlJMdbXLsqyvJYbmI2DPTxB6fEHy1FSvRo3XbsYyila4ThEynpMvlyb67d3zkyA2bVXxWxCqZaKqjE2IqqfXxbHJESosWUcW-Q')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-background" />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop text-center mt-10 mb-10">
          <h1 className="font-headline-xl text-headline-xl text-on-primary mb-6 animate-fade-in-up text-3xl">
            Our Comprehensive<br />
            <span className="text-secondary-fixed">Logistics Solutions</span>
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-highest max-w-2xl mx-auto opacity-90">
            Engineered for precision. Delivering reliable, scalable transportation services that form the backbone of global trade.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full bg-background -mt-16 pb-24 relative z-20 pt-20">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
            {services.map((service) => {
              const Icon = iconMap[service.iconName];
              return (
                <article key={service.id} className={`group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full translate-y-0 hover:-translate-y-2 border border-outline-variant hover:border-primary-container relative ${service.className}`}>
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="w-[120px] h-[120px] text-primary" />
                  </div>
                  <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                      style={{ backgroundImage: `url('${service.imageUrl}')` }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow z-10 relative bg-surface-container-lowest">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">{service.title}</h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
