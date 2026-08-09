'use client';

import { Truck, ArrowRight, Weight, Layers, Package, Bus, Cog, Snowflake, AlignJustify, HardHat, BadgeCheck, Settings } from 'lucide-react';

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
      <div className="max-w-[1440px] mx-auto w-full px-margin-mobile lg:px-margin-desktop relative z-20 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter w-full">
          
          {/* Vehicle Card: 40ft Container Trailers */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col h-full transform hover:-translate-y-1">
            <div className="w-full h-64 bg-surface-variant relative overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB359Q8H4HOxXOP9JAPWaPlp9dDwT-PAxtytdToTDl1490nfuqCDqKT9sKcJG419CjiVyDf7DLhTGnvzvMe9HqhY9lQiKzV2tc6WfX1pZDS_lWRof8mb5G8L1Qapv-Au6k6uJVnt_N9j7LyGobhnWCGlKZYMjZYqo9YLj8v18-nTfSKF6LnseVNAwpTSW7RoYhCxY6nKzsTfLXeJt3Xz4ccv_E_LjYt_hcsZbQczy1t1ALc9cOygTgnww')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <h2 className="font-headline-md text-headline-md text-on-primary">40ft Trailers</h2>
                <Truck className="text-secondary-container w-8 h-8" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow gap-6 bg-surface-container-lowest text-on-surface">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our flagship heavy-haulers designed for maximum volume maritime containers and large-scale industrial cargo.
              </p>
              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                    <Weight className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant">Capacity</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">Up to 30 Tons</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant">Ideal For</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">Import/Export, Heavy Machinery</p>
                  </div>
                </div>
              </div>
              <a className="mt-2 w-full flex items-center justify-center gap-2 font-label-bold text-label-bold bg-primary-container text-on-primary py-3 rounded-lg hover:bg-secondary-container transition-colors group-hover:shadow-md" href="#">
                Request Availability <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Vehicle Card: 20ft Container Vehicles */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col h-full transform hover:-translate-y-1">
            <div className="w-full h-64 bg-surface-variant relative overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQmyPrqQd-29Y4IOogNiya-wR-Y-vpJu_p8eD-S3uToq42UbtVQ8aBlAcJkEqkhBJA9vA5O9A_AGKOb8_90ZMEpM7OX5bMGQQS1nhP-Gi1mXJ-k4iOn_j4RkCeGoSFh-kn95kQhNZJj3X7grxe0SBm2NDUPq-E-1V6u5ya60CDy80mXkaDRSNdQ2D1EgZwASl8-ujFtJ4y-Tu6is5-uTTEUEj-7HxdU5AQP9Sylx0cx9NHVBOTa4-xmA')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <h2 className="font-headline-md text-headline-md text-on-primary">20ft Vehicles</h2>
                <Truck className="text-secondary-container w-8 h-8" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow gap-6 bg-surface-container-lowest text-on-surface">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Versatile and agile rigs perfect for standard shipping containers, balancing payload capacity with maneuverability.
              </p>
              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                    <Weight className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant">Capacity</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">Up to 24 Tons</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant">Ideal For</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">Standard FCL, Regional Transit</p>
                  </div>
                </div>
              </div>
              <a className="mt-2 w-full flex items-center justify-center gap-2 font-label-bold text-label-bold bg-primary-container text-on-primary py-3 rounded-lg hover:bg-secondary-container transition-colors group-hover:shadow-md" href="#">
                Request Availability <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Vehicle Card: Mazda Vehicles */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col h-full transform hover:-translate-y-1">
            <div className="w-full h-64 bg-surface-variant relative overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlOBwkojemyYvvohGWo3NgHOMow8ok4bO5d9TsJz3Yq_IBtN2G_Es-nqLO_EffB9lgL_mdxBNQnR9F7R3KFfQIHPl0xEJ784dT6T2zBeMtiUYWWTORXyE6u5s06Vx0EqeQLMeED2xn1VSauGkD9wWwoQ5D71LUY0fiJF9_MMcW7x1dd7a8vMNeM6twInePBVJywyM2YjPntr__AwgRn2Z626iPfyvIQKFW_8AJoiwalQAZvocmFzgOiA')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <h2 className="font-headline-md text-headline-md text-on-primary">Mazda Fleet</h2>
                <Bus className="text-secondary-container w-8 h-8" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow gap-6 bg-surface-container-lowest text-on-surface">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Efficient light-to-medium duty trucks optimal for intra-city distribution and expedited regional deliveries.
              </p>
              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                    <Weight className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant">Capacity</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">3 to 5 Tons</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant">Ideal For</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">FMCG, LTL Freight, Retail</p>
                  </div>
                </div>
              </div>
              <a className="mt-2 w-full flex items-center justify-center gap-2 font-label-bold text-label-bold bg-primary-container text-on-primary py-3 rounded-lg hover:bg-secondary-container transition-colors group-hover:shadow-md" href="#">
                Request Availability <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Vehicle Card: Shehzore Vehicles */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col h-full transform hover:-translate-y-1">
            <div className="w-full h-64 bg-surface-variant relative overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0GGPPArp3SCtSIXZazoaYeLogBNECQGjckNVBv9QIDr_LPlrcHzF1VCwIXNCz5dXnWjFeTY_cDQRIQ76V7QDD8ecB7Ug21pWGR3TAksGTSkb4-6ppiI-0bpeITCyVXwhS9NMogxh5C_XF0h6YKFW0iOTjjjkLzIou4LTGwQZXQqQTfho4KuROF7brvGfeHSHsqCEXOth713pNJAqSf7p-XWE2c4mUjqj93dFR8DLhaXAC4Twmlw6Gg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <h2 className="font-headline-md text-headline-md text-on-primary">Shehzore Fleet</h2>
                <Truck className="text-secondary-container w-8 h-8" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow gap-6 bg-surface-container-lowest text-on-surface">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Highly maneuverable urban delivery vehicles, perfect for navigating tight city streets and providing swift last-mile solutions.
              </p>
              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                    <Weight className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant">Capacity</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">1 to 1.5 Tons</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant">Ideal For</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">Last-mile, Courier, Small Cargo</p>
                  </div>
                </div>
              </div>
              <a className="mt-2 w-full flex items-center justify-center gap-2 font-label-bold text-label-bold bg-primary-container text-on-primary py-3 rounded-lg hover:bg-secondary-container transition-colors group-hover:shadow-md" href="#">
                Request Availability <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Vehicle Card: Local Transportation Vehicles */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col h-full transform hover:-translate-y-1">
            <div className="w-full h-64 bg-surface-variant relative overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHhJx4NSTXR8B1jvawh4uL8uEzJYDdKWTPKrUeXBaBPJ8IXx53VQABvQj9T7ub_NmFgWxsj2WO2L3HSz5fDWHVuAB0qRMaTOJKga1wWgJi8fD3PTG7g1OJS3H6a98WZs6Y-hurXgaVrf2p34FtKph9f2f7W-xcLOkkoiuBaiTdsp5-YYSCBNcpr-RoZFkZIAvFjoGlMhtWMW1dN4earoN2FblAnFMiCugmoNXLD1vg-ZKAn5QFZs1BCQ')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <h2 className="font-headline-md text-headline-md text-on-primary">Local Transport</h2>
                <Truck className="text-secondary-container w-8 h-8" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow gap-6 bg-surface-container-lowest text-on-surface">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Efficient and versatile vehicles for local city-wide deliveries, suitable for narrow streets and quick turnarounds.
              </p>
              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                    <Weight className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant">Capacity</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">Up to 1 Ton</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant">Ideal For</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">E-commerce, Last-mile, Retail</p>
                  </div>
                </div>
              </div>
              <a className="mt-2 w-full flex items-center justify-center gap-2 font-label-bold text-label-bold bg-primary-container text-on-primary py-3 rounded-lg hover:bg-secondary-container transition-colors group-hover:shadow-md" href="#">
                Request Availability <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Vehicle Card: Specialized Transportation */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col h-full transform hover:-translate-y-1">
            <div className="w-full h-64 bg-surface-variant relative overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByQf6PBJ5VjH-wsMvJwq3h6kG9npdxf1kwDeWVE9mYjLMXfGiGbpmgUJEzAOpiu4APUeU6e1uEW7l2IV1rxu23ipHUfl9q0KU93jYPT-Yfamz6UYEGvaHg8Qi0D3vxDgm7sbv5MQ8Ad-6-de1bwrSL1rdVpgka1Aq4hqDejqM58MqXNUw7BEgcR5xxray4q6NlKU1vojDoQ51gShCArVismRlwYNKil2zlk5ZJeaYyGVOqaPfih0xRWA')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <h2 className="font-headline-md text-headline-md text-on-primary">Specialized Transport</h2>
                <Cog className="text-secondary-container w-8 h-8" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow gap-6 bg-surface-container-lowest text-on-surface">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Custom solutions for out-of-gauge (OOG) cargo, oversized machinery, and sensitive goods requiring specific environmental controls.
              </p>
              <div className="mt-auto space-y-3">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 font-label-bold text-label-bold text-primary-container bg-surface-container px-2 py-1 rounded-md text-[10px] uppercase">
                    <Snowflake className="w-3 h-3" /> Reefers
                  </span>
                  <span className="inline-flex items-center gap-1 font-label-bold text-label-bold text-primary-container bg-surface-container px-2 py-1 rounded-md text-[10px] uppercase">
                    <AlignJustify className="w-3 h-3" /> Flatbeds
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                    <HardHat className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant">Ideal For</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">Project Cargo, Cold Chain</p>
                  </div>
                </div>
              </div>
              <a className="mt-2 w-full flex items-center justify-center gap-2 font-label-bold text-label-bold bg-primary-container text-on-primary py-3 rounded-lg hover:bg-secondary-container transition-colors group-hover:shadow-md" href="#">
                Consult Project Team <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Data / Fleet Stats Section */}
        <section className="mt-24 mb-12 px-margin-mobile lg:px-margin-desktop w-full max-w-[1440px] mx-auto">
          <div className="bg-primary-container rounded-2xl p-8 lg:p-12 text-on-primary relative overflow-hidden flex flex-col md:flex-row gap-12 items-center justify-between shadow-xl">
            <div className="absolute -right-32 -top-32 w-96 h-96 bg-secondary-container rounded-full blur-3xl opacity-20 pointer-events-none" />
            <div className="max-w-xl relative z-10 space-y-6">
              <h3 className="font-headline-lg text-headline-lg text-on-primary">Maintained for Excellence</h3>
              <p className="font-body-md text-body-md text-on-primary-fixed-dim">
                Every vehicle in the Bright Logistics fleet undergoes rigorous preventive maintenance and is equipped with real-time GPS tracking, ensuring your cargo is secure and visible every mile of the journey.
              </p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="text-secondary-container w-5 h-5" />
                  <span className="font-label-bold text-label-bold text-on-primary uppercase">GPS Tracked</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="text-secondary-container w-5 h-5" />
                  <span className="font-label-bold text-label-bold text-on-primary uppercase">24/7 Serviced</span>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 flex gap-8">
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-surface-container/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
                    <path className="text-secondary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="95, 100" strokeWidth="2"></path>
                  </svg>
                  <span className="font-headline-sm text-headline-sm text-on-primary">99%</span>
                </div>
                <span className="font-label-bold text-label-bold text-on-primary-fixed-dim mt-2">Uptime</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-surface-container/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
                    <path className="text-secondary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="2"></path>
                  </svg>
                  <span className="font-headline-sm text-headline-sm text-on-primary">50+</span>
                </div>
                <span className="font-label-bold text-label-bold text-on-primary-fixed-dim mt-2">Vehicles</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
