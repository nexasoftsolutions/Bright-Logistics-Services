'use client';

import { HeartPulse, Factory, Ship, Warehouse, Truck, HardHat, Building2 } from 'lucide-react';

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

      <section className="w-full py-16 lg:py-24 px-margin-mobile lg:px-margin-desktop bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {/* Industry 1: Healthcare */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFV4hevNjl6I-RQ29D5IBJS_wc_9w-weGG_GWDT5w5h1CXGHhLsNe1272iZgsL6DP5KCG4eE223y7TYIppPbcBQUTMuzo5s7g3YThsQDnZoYEF712BRQ_Hy37h0lFSADeWagYhUqhMU2zVluP-f90F8PgyWvd9eAPbcbwyqvW7cFmqdF_hG_BLSK-3Hnw5Qcol4GEcZXqnjwlWq7ifM2MsJ2QF2L37_jvZpyQgTMOjrRBUiiAU67jb0Q')" }}
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col bg-surface-container-lowest">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-4 text-secondary-container group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors duration-300">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-secondary transition-colors">Healthcare &amp; Medical</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Temperature-controlled transport and secure handling of critical medical supplies, pharmaceuticals, and sensitive hospital equipment.
                </p>
              </div>
            </div>

            {/* Industry 2: Manufacturing */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4z09ZdJfV5rswl4KOAtWCD6YDNTvuUuECgn-6_xW4XbXIFVoZlpn_l2weOP0L7aGGSABxWBNjMnoqwS2KWy_Lff29JGrG-vy4d2xZ3s2t16rnGvYxqdxTQt-ourgOltvVJvBdRCpLMhhlubgNLUa_O3uXMorO0p-k5taHjJwXd77U0ePavZSM-iN5ziKJEkfV4GcxXL3F2iZH4c7grjg2GnYJhrelaP2ys4OeuOSdOUm36EaiLBIH8g')" }}
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col bg-surface-container-lowest">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-4 text-secondary-container group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors duration-300">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-secondary transition-colors">Manufacturing</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Just-in-time logistics ensuring seamless flow of raw materials and finished goods to keep production lines running at peak efficiency.
                </p>
              </div>
            </div>

            {/* Industry 3: Import & Export */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtMJQgi_uBPT0f8e8N24hXK55hrcGW_N7fmoT4Vp-eqE0cTzGH_2vXo9PPXO79RU7Q_wBr1pq7qubt2r4LdFFCIn12wVuWqUSZoLeIg5sZCnQIgby7VLwtiHYSXBYDOy2Oihc5kbsLupxgrQb4-kV6TQudhYPoSPTtjHm7mC_dA5ho1XcytgZVGf0dLK9X8qIHxZwQNSViW19KL5hTrD4W_fc5X7nfmh5uGrNcMRs-npBic5iPbhNzHw')" }}
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col bg-surface-container-lowest">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-4 text-secondary-container group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors duration-300">
                  <Ship className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-secondary transition-colors">Import &amp; Export</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Comprehensive freight forwarding, customs clearance, and global networking to facilitate smooth international trade operations.
                </p>
              </div>
            </div>

            {/* Industry 4: Warehousing & Distribution */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHzNdlYNhNY2gYAFIFwm1wwmRF0bwEVeqTZqcuwB94zUSp1s4z4XJFlpNUJOA9zvfm3t_yda3oH6qxBUfPNLhEB3oDTX-X0NB9H5g5QfeUetLeTCFYeMwqio5KufRPwQj0pckczU3gxkKyVy-a2UW_ZeYyfhuB56UYhLKHb99Ikv4WYFTQsCUoq0kf6hipuWlYGMCUN5i45kbNf8_jTMjxL2AEQFpQPyczrZaxPlXybUT3GjsHuUsyUw')" }}
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col bg-surface-container-lowest">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-4 text-secondary-container group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors duration-300">
                  <Warehouse className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-secondary transition-colors">Warehousing &amp; Distribution</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  State-of-the-art storage facilities with advanced inventory management and efficient distribution networks for your goods.
                </p>
              </div>
            </div>

            {/* Industry 5: Industrial Equipment */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYQPH2JH0gKN2tMzXNNVN6Le61SeJr75XRQBeFTx5npqLApDoRUT_lhEMTDkf0qP3T6tlI_Mr91RUPsDalX0WUJnaPtXicIAMJQgkhNphBbKLK33n1Uq92l-QRJy1Wk4uPGvcjgFfGEXZXN2rJHz4QhAP9cuBrC9C5InOAfWft-c1ieYUZOHFXK2QfxbbWzmXE1fNoL19R8Z__ehBkS5nfTtevRC5ADn8vfVXwGz0ebyT8P9slkYl77w')" }}
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col bg-surface-container-lowest">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-4 text-secondary-container group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors duration-300">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-secondary transition-colors">Industrial Equipment</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Specialized transportation solutions for heavy machinery, oversized loads, and industrial project cargo requiring care.
                </p>
              </div>
            </div>

            {/* Industry 6: Construction & Project */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjhIIvtvE1waDONP3q2Cn1QgSLWBwlF7K8JgEfPTz2BNcv9iTa9qkAmxnw_Ds1BO3Xs-N1_nGLnprMCpl2F_RksqtWZTmrWQfv-w2YVRkar7_0qXyk4YQ01NFL7_Sw25JAnDXQ7nS5AWjptmBqGvGiWILR8Gv3MjOUZmLQ4wSRv5Q8uM3BrVnM-E8hRAZnAWTHZm63qjH4NxShDUmwmIuY1uBlAsuq1RrI45bChOhfSUhv-suauRiqug')" }}
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col bg-surface-container-lowest">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-4 text-secondary-container group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors duration-300">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-secondary transition-colors">Construction &amp; Project</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  End-to-end logistics support for construction sites, delivering materials and equipment safely and exactly on schedule.
                </p>
              </div>
            </div>

            {/* Industry 7: Corporate Clients */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUtqKhzku0hOwLgHOUwhw9MxPFlT8uHof3NOC8vbneyZ9AsaggS2oCGM975sS0TA1BhE_Jhq-yvEsLV8Zjgr4Tg9d0t6v9TALhOw75Filt1p13wNhLYOXU0j_4g8u-UGq8_tNia25ezYVDN3JgWK5Efl6EKK9tmf50ezruut_Tn247AHsO_S8Lie_FczipDeb1Ak_FTexPUle_mv5w_zNPhzYiHjPFOSWOPJ0m3p7pr9ouyVhr96bWdg')" }}
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col bg-surface-container-lowest">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-4 text-secondary-container group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-secondary transition-colors">Corporate Clients</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Customized corporate logistics and supply chain management designed specifically for large-scale enterprise operations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
