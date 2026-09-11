import { Building2, HeartPulse, Ship, ShieldCheck, Clock, Users, ArrowRightLeft } from 'lucide-react';
import { SectionContainer, SectionHeading, PageHero, Breadcrumbs, CTABanner } from '@/components/ui';

const clientTypes = [
  {
    title: 'Top Manufacturers',
    description: 'We partner with leading manufacturers to provide seamless supply chain and plant-to-warehouse logistics, ensuring production lines never stop.',
    icon: Building2,
    color: 'bg-primary-fixed',
    textColor: 'text-on-primary-fixed',
  },
  {
    title: 'Healthcare Providers',
    description: 'Delivering critical medical supplies and equipment with the utmost care, prioritizing safety, compliance, and timely execution.',
    icon: HeartPulse,
    color: 'bg-secondary-fixed',
    textColor: 'text-on-secondary-fixed',
  },
  {
    title: 'Importers & Exporters',
    description: 'Facilitating global trade through efficient port-to-warehouse movements, container transportation, and customized freight solutions.',
    icon: Ship,
    color: 'bg-tertiary-fixed',
    textColor: 'text-on-tertiary-fixed',
  }
];

const valuePropositions = [
  {
    title: 'Unmatched Reliability',
    description: 'We honor our commitments. Our fleet and operators are dedicated to ensuring your cargo reaches its destination exactly when promised.',
    icon: Clock
  },
  {
    title: 'Professional Coordination',
    description: 'Our experienced logistics coordinators manage every detail of the supply chain, minimizing delays and maximizing operational efficiency.',
    icon: Users
  },
  {
    title: 'Safety First',
    description: 'From routine inspections to advanced tracking, we implement rigorous safety protocols to protect your valuable assets at every step.',
    icon: ShieldCheck
  },
  {
    title: 'End-to-End Visibility',
    description: 'Stay informed with continuous updates and proactive communication, giving you peace of mind throughout the transportation process.',
    icon: ArrowRightLeft
  }
];

export const metadata = {
  title: 'Our Clients | Bright Logistics Services',
  description: 'Discover the diverse industries we serve and learn why top manufacturers, healthcare providers, and global traders trust Bright Logistics.',
};

export default function ClientsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
        title="Our Clients"
        subtitle="Trusted by leading businesses across Pakistan for safe, reliable, and precise logistics solutions."
      />
      
      <Breadcrumbs />

      {/* Industries We Serve Section */}
      <section className="w-full py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-surface-lowest">
        <SectionContainer>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Partners in Your Success"
            subtitle="We provide tailored transportation solutions for a wide range of industries, adapting to the unique requirements of each sector."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => {
              const Icon = client.icon;
              return (
                <div key={index} className="flex flex-col bg-surface rounded-2xl p-8 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
                  <div className={`w-14 h-14 rounded-full ${client.color} ${client.textColor} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-title-lg text-on-surface mb-4">{client.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    {client.description}
                  </p>
                </div>
              );
            })}
          </div>
        </SectionContainer>
      </section>

      {/* Why Clients Trust Us Section */}
      <section className="w-full py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <SectionContainer>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/3">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Built on Trust & Excellence"
                subtitle="We don't just move cargo; we build lasting partnerships based on consistent performance and uncompromising quality."
                align="left"
              />
            </div>
            
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {valuePropositions.map((prop, index) => {
                const Icon = prop.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-title-md text-on-surface mb-2">{prop.title}</h4>
                      <p className="text-body-md text-on-surface-variant leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* CTA Section */}
      <CTABanner 
        headline="Ready to Optimize Your Logistics?" 
        description="Join the growing list of businesses that trust Bright Logistics with their critical transportation needs." 
        buttonText="Get a Quote" 
        buttonHref="/quote" 
      />
    </div>
  );
}
