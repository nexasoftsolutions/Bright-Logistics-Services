import { HeartPulse, Factory, Ship, Warehouse, Truck, HardHat, Building2 } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import { industries } from '@/data/industries';

const iconMap = {
  HeartPulse, Factory, Ship, Warehouse, Truck, HardHat, Building2
};

export default function Industries() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-primary px-margin-mobile lg:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-30" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLRVkXIOVCbw7juVXURIMpVfBgQ2916Dng4SolV8e3iIZFLgKPSxc59Td6l4aYdCHW96zPHnAtB4cziwnGoTn4Qr5wG0Ye_rbiA4YzTpXXYLEjSavqEIp4xs0YW-_exTp6coIX9CPZwAYyMKqhJIeZmHXUJ3mIljFf30oknVObdQr6RvmAmnt7klA0ITmnJ5uVdQ4M7BDY4BXzzN6RDAaghXUmapMlHUJj8pzDd_ncLV_vb65Ih06urQ')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center space-y-6">
          <h1 className="font-headline-xl text-headline-xl text-on-primary text-3xl">Industries We Serve</h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-[600px] mx-auto">
            From critical healthcare supplies to heavy industrial machinery, Bright Logistics delivers tailored, high-precision supply chain solutions across global sectors.
          </p>
          <div className="w-24 h-1 bg-secondary-container mx-auto rounded-full mt-8" />
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-surface">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry) => {
              const Icon = iconMap[industry.iconName];
              return (
                <div key={industry.id} className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                      style={{ backgroundImage: `url('${industry.imageUrl}')` }}
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col bg-surface-container-lowest">
                    <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-4 text-secondary-container group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-secondary transition-colors">{industry.name}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {industry.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
