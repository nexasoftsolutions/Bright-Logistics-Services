'use client';

import { Ship, Truck, ArrowRight, Anchor, Warehouse, Cog, Factory, Building2, Map, Archive, Store, Recycle, Link, Maximize, HardHat, Handshake, ClipboardCheck } from 'lucide-react';

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
        <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
            
            {/* Service Card 1 */}
            <article className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full translate-y-0 hover:-translate-y-2 border border-outline-variant hover:border-primary-container relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Ship className="w-[120px] h-[120px] text-primary" />
              </div>
              <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARW-Vu9bjEydApK8L9ydpRPbHxKMaLgHGZcgP-RKmnqNjRggsByPlQvv_IxBsP22lLANUmPccRUpBU4UMTf41soMFRwQmSByo8D4hDJsaGBCTlXmHzpSyU5xYzx1QOtuy8Nm8fJnwliNvG4KXl46PwQwf9xJMG6sf9D4thjZBNUCE-r6C9V8fYbj7iBb44333cB8S3G6bEqJoodkdQieelqtuNzG1pBISkf0FsheNUDhOtVf1732DNxw')" }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow z-10 relative bg-surface-container-lowest">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Container Transportation</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                  20ft and 40ft container transportation for import/export movements between ports, warehouses, and final destinations.
                </p>
              </div>
            </article>

            {/* Service Card 2 */}
            <article className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full translate-y-0 hover:-translate-y-2 border border-outline-variant hover:border-primary-container relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Anchor className="w-[120px] h-[120px] text-primary" />
              </div>
              <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKOydLwEXvkeAnhsEPwpIUM-RfioGGJqj02XHTuTdDTCOMx3bnfBgk5afTYSdv788oGCA4TJ-wNFrfF1FvBBxJzj5ZyCIP-ExGdg1VCBlQXeXJiez3z4XTUBOF8vyWyGH_o7hMnKiVo64oK7V8GWog39YKSnQzC1llR-1NQb1NGEUFwbtgRHor3oSS5u0B9XkcqS063prTQuPGZz0Hx8tG5YxzU0ZkyM1dUZxLjxhELQZH6yr4140EDg')" }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow z-10 relative bg-surface-container-lowest">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Port Transportation</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                  Transportation from Karachi Port and Port Qasim to warehouses, factories, and customer locations.
                </p>
              </div>
            </article>

            {/* Service Card 3 */}
            <article className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full translate-y-0 hover:-translate-y-2 border border-outline-variant hover:border-primary-container relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cog className="w-[120px] h-[120px] text-primary" />
              </div>
              <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2torUByBjWUBDMUJpfCq9j39YaMMfHhuuXZv03zV0cn7iU5_OyPizwPyKnDagpQBSFslWQQuLV04KSOWrfxLh8lK8thg4KJqDBbJ4Ew20UbCqTl_6x-GIQj_f-63YGr847IvtP7KGNFpmos5_IU95qvZCdI1fxKBvG9IDaOvZlTmPHoQTpecDED_DHAhtynrwrw6PsE3XivB1K2PGO6x1eIdvadktnprQzPUPW3_BsjoxdlyGyaJlqQ')" }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow z-10 relative bg-surface-container-lowest">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Plant Transfer</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                  Transportation of industrial machinery, equipment, and plant materials with specialized handling.
                </p>
              </div>
            </article>

            {/* Service Card 4 */}
            <article className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full translate-y-0 hover:-translate-y-2 border border-outline-variant hover:border-primary-container relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Building2 className="w-[120px] h-[120px] text-primary" />
              </div>
              <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAP1r8xZNae0_RuzdEKheiGFhb8Gt4JyG8W44sQHf_fmkvFaRF8b9J0ZvUy7BFXy6k_e3qi6Fw_l-7lZQcH0R174voogwn0pQSSiZ9x7yki_7Wn2zn63FRS0opf6VYjluG7vMH4ogc4TG7oKrEG36-wo2-6f_wL1YIzoRc2Av4YOEj_J7JjbNjRq-f48DIw_g7otYyG13IVnkRLBBkHLfMQfo6Q5pdGIaZj7G55ljrDSSpWBy7bGe40Ig')" }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow z-10 relative bg-surface-container-lowest">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Local Transportation</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                  Reliable and swift transportation services within Karachi and its surrounding metropolitan areas.
                </p>
              </div>
            </article>

            {/* Service Card 5 */}
            <article className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full translate-y-0 hover:-translate-y-2 border border-outline-variant hover:border-primary-container relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Archive className="w-[120px] h-[120px] text-primary" />
              </div>
              <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBR6jduEzKmrz7jetixTUUw4IkH3CLzphf2d4YG93AMFoY4SKOL9p6LFq4PlyQCSyvb_VOfhAYb49kd9ipcgC0HuarhYKntDf0-RiQKsZi3RqNwI9400K5HMuFOjyCOrETCmVfn6fCz-b8ojfzTYQsvqDRQNDQ7a10Ys-LF-RdwdazdSGdxABDm88VFBIV6yrU-IvtSRu8oamBrTc5uDWqyMc1BwJDeGYncZocDdPY39Ay8hvSaDhDR7g')" }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow z-10 relative bg-surface-container-lowest">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Warehouse Transportation</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                  Seamless movement between ports, dedicated warehouses, distribution centers, and client locations.
                </p>
              </div>
            </article>

            {/* Service Card 6 */}
            <article className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full translate-y-0 hover:-translate-y-2 border border-outline-variant hover:border-primary-container relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Recycle className="w-[120px] h-[120px] text-primary" />
              </div>
              <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzUGncKkeOsYFPiX0Q-Xuxe7OxP8RSuBju4t_cAHoSMyAh93keyYalhUXt47JYg9figZeGm531_FjUD3qET2Dv2dhAdigxaWWZRwCpvxTbqquiO4Cg31FmDDwQ1Bs8pvLuFJC2eEt-iMLV-tam3EVJZJDit508WWE4_ZrBdRUFhrJHQJlBl07uwI6HBZzYilEX5XI5b-yM4daD3N0me1O7QJlABL1ShhEjbeHe7KWjszE9HkdAVk9MEQ')" }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow z-10 relative bg-surface-container-lowest">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Empty Container Return</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                  Efficient transportation and coordination services specifically designed for empty container returns.
                </p>
              </div>
            </article>

            {/* Service Card 7 */}
            <article className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full translate-y-0 hover:-translate-y-2 border border-outline-variant hover:border-primary-container relative md:col-span-2 lg:col-span-1 xl:col-span-2">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Maximize className="w-[120px] h-[120px] text-primary" />
              </div>
              <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmAj3hvxPUsnw3UTfKlGVNtJZckjyjVrxnBTiimo1e4HxKLAJw8nE3P4qn8s6BgmMGwC92EGnwekrbgMkFEQ_AH0l0BLRbTTsr01TzHqJanxs3TshF8OAHleXUEbdBOP2p-zloBYngNyDXJJn29-p_hyvVVnz5munWNLIOxOaMieMwC2nnZ75gfMh-yqaN9gIA4Nrv6nmE8zuGWSGKNXP1CSRSK6OUsgHjiiJM-1ScGsoKIkwNjsoHig')" }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow z-10 relative bg-surface-container-lowest">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Project &amp; Heavy Cargo</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                  Highly customized, specialized transportation solutions engineered for oversized machinery, complex industrial equipment, and sensitive project cargo requiring expert logistics management.
                </p>
              </div>
            </article>

            {/* Service Card 8 */}
            <article className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full translate-y-0 hover:-translate-y-2 border border-outline-variant hover:border-primary-container relative md:col-span-2 lg:col-span-2 xl:col-span-2">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Handshake className="w-[120px] h-[120px] text-primary" />
              </div>
              <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbUQ-ZaSU0IbMyvBlze9IpEYjQI7tY-Z5SBFhRujiTBuOnYgVa7iIUrk9gn6EGAkcA9vxEB9vWPpivyBw8Ea1HItMNJsJeLOvUx5ZwibNtc21t38j_ncqeKZGB8RZ_3sWfsGAOjFPfj8Vm6xvkpCk6hKWwwNBS837Cp6xOpK6EFtIbZmBod8iex5Pp94UBrFCI6DC1HenRGzGqUGnXa_ftGyIMGaOa8xJpZ3NPm7eVZ38SMYO5MiNGWg')" }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow z-10 relative bg-surface-container-lowest">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Dedicated Transportation</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                  Customized, dedicated transportation arrangements tailored specifically for your regular, ongoing business requirements. Guarantee capacity and lock in reliability with our contract logistics services.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  );
}
