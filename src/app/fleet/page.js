import { Truck, ArrowRight, Weight, Layers, Package, Bus, Cog, Snowflake, AlignJustify, HardHat, BadgeCheck, Settings } from 'lucide-react';
import { vehicles, fleetStats } from '@/data/fleet';
import { SectionContainer } from '@/components/ui';

const IconMap = {
  Truck, ArrowRight, Weight, Layers, Package, Bus, Cog, Snowflake, AlignJustify, HardHat, BadgeCheck, Settings
};

export default function Fleet() {
  return (
    <div className="flex flex-col w-full bg-background relative overflow-hidden pb-margin-desktop">
      {/* Hero / Header Section */}
      <section 
        className="w-full relative z-10 pt-16 pb-24 px-margin-mobile lg:px-margin-desktop bg-surface flex flex-col items-center justify-center text-center overflow-hidden" 
        style={{ backgroundImage: 'linear-gradient(rgba(0, 6, 19, 0.7), rgba(0, 6, 19, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5WB0OLCFPSK07NuUTr7F1VUXoAtEWe6cTTmp177Dffd-6u4LLV8xruMcrIcAGP_NgpzW5vwfpYw8r-gMBq79cVVkNRY0qBNHNxDQK1r7oCWESFOl1NX_ZEF77epIPd6KZM2JCi0gTza1Z_9yoapaWS1lCS7Bz_1iSnxbzyeZxVBzXpc9Q0YPrhG_kfjiqQUC2PXoePxZmvSRA4oYgl62rbB691wBJGW8R7RZumZCEeGnbzkeWMV__Vg")', backgroundSize: 'cover', backgroundPosition: 'center center' }}
      >
        {/* Abstract Decoration */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex justify-center items-center">
          <svg className="text-primary-container fill-current" height="800" viewBox="0 0 100 100" width="800">
            <circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.5" />
            <circle cx="50" cy="50" fill="none" r="30" stroke="currentColor" strokeWidth="1" />
            <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="currentColor" strokeDasharray="1 5" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-[1440px] w-full mx-auto relative z-10 flex flex-col items-center gap-6 mt-20">
          <span className="font-label-bold text-label-bold text-secondary-container uppercase tracking-[0.2em] bg-secondary-container/10 px-4 py-2 rounded-full">
            Equipment &amp; Assets
          </span>
          <h1 className="font-headline-xl text-headline-xl max-w-4xl text-white">
            Our Transportation <span className="text-primary-container relative">Fleet<svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary-container opacity-80" preserveAspectRatio="none" viewBox="0 0 100 10"><path d="M0,8 C30,-2 70,12 100,5" fill="none" stroke="currentColor" strokeWidth="2"></path></svg></span>
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl mt-4 text-white/90">
            A modern, specialized, and highly maintained fleet engineered to handle diverse cargo profiles across the region with uncompromising reliability.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <SectionContainer className="w-full relative z-20 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter w-full">
          {vehicles.map((vehicle) => {
            const MainIcon = IconMap[vehicle.iconName];
            return (
              <div key={vehicle.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col h-full transform hover:-translate-y-1">
                <div className="w-full h-64 bg-surface-variant relative overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: `url('${vehicle.imageUrl}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <h2 className="font-headline-md text-headline-md text-on-primary">{vehicle.name}</h2>
                    {MainIcon && <MainIcon className="text-secondary-container w-8 h-8" />}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow gap-6 bg-surface-container-lowest text-on-surface">
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {vehicle.description}
                  </p>
                  <div className="space-y-3">
                    {vehicle.tags && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {vehicle.tags.map((tag, i) => {
                          const TagIcon = IconMap[tag.iconName];
                          return (
                            <span key={i} className="inline-flex items-center gap-1 font-label-bold text-label-bold text-primary-container bg-surface-container px-2 py-1 rounded-md text-[10px] uppercase">
                              {TagIcon && <TagIcon className="w-3 h-3" />} {tag.name}
                            </span>
                          );
                        })}
                      </div>
                    )}
                    {vehicle.capacity && (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                          <Weight className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-label-bold text-label-bold text-on-surface-variant">Capacity</p>
                          <p className="font-body-sm text-body-sm text-on-surface font-semibold">{vehicle.capacity}</p>
                        </div>
                      </div>
                    )}
                    {vehicle.idealFor && (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                          {vehicle.iconVariant ? (() => { const VariantIcon = IconMap[vehicle.iconVariant]; return VariantIcon && <VariantIcon className="w-4 h-4" /> })() : <Layers className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="font-label-bold text-label-bold text-on-surface-variant">Ideal For</p>
                          <p className="font-body-sm text-body-sm text-on-surface font-semibold">{vehicle.idealFor}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Data / Fleet Stats Section */}
        <section className="mt-24 mb-12 w-full">
          <div className="bg-primary-container rounded-2xl p-8 lg:p-12 text-on-primary relative overflow-hidden flex flex-col md:flex-row gap-12 items-center justify-between shadow-xl">
            <div className="absolute -right-32 -top-32 w-96 h-96 bg-secondary-container rounded-full blur-3xl opacity-20 pointer-events-none" />
            <div className="max-w-xl relative z-10 space-y-6">
              <h3 className="font-headline-lg text-headline-lg text-on-primary">{fleetStats.title}</h3>
              <p className="font-body-md text-body-md text-on-primary-fixed-dim">
                {fleetStats.description}
              </p>
              <div className="flex gap-6 mt-4">
                {fleetStats.features.map((feature, i) => {
                  const FeatureIcon = IconMap[feature.iconName];
                  return (
                    <div key={i} className="flex items-center gap-2">
                      {FeatureIcon && <FeatureIcon className="text-secondary-container w-5 h-5" />}
                      <span className="font-label-bold text-label-bold text-on-primary uppercase">{feature.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative z-10 flex gap-8">
              {fleetStats.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-surface-container/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
                      <path className="text-secondary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray={metric.strokeDasharray} strokeWidth="2"></path>
                    </svg>
                    <span className="font-headline-sm text-headline-sm text-on-primary">{metric.value}</span>
                  </div>
                  <span className="font-label-bold text-label-bold text-on-primary-fixed-dim mt-2">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionContainer>
    </div>
  );
}
