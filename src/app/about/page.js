'use client';

import { ArrowRightLeft, Flag, Eye, Truck, UserCheck, Map, CheckCircle, Phone, Mail, Building2 } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero / Header Section */}
      <section className="relative w-full pt-16 pb-24 md:pt-32 md:pb-40 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 bg-surface-container opacity-50 z-0" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-[100px] z-0" />
        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-6 relative">
            <span className="text-secondary font-label-bold text-label-bold tracking-[0.2em] uppercase">[ About Bright Logistics ]</span>
            <h1 className="font-headline-xl text-headline-xl text-on-background relative">
              <span className="relative z-10">Moving Your Business Forward</span>
              <span className="absolute -bottom-2 left-0 w-24 h-4 bg-secondary-fixed opacity-60 -z-10" />
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mt-4 leading-relaxed">
              Bright Logistics Services is a professional logistics and transportation company based in Karachi, Pakistan. We provide reliable transportation solutions for importers, exporters, manufacturers, healthcare organizations, warehouses, distributors and corporate clients. Our services include container transportation, port-to-warehouse movements, plant transfers, local transportation, warehouse movements and customized logistics solutions. Our operations focus on safety, reliability, timely delivery and professional coordination.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-[1px] bg-outline-variant" />
              <span className="font-label-bold text-label-bold text-on-surface-variant">Safety. Reliability. Precision.</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
            <div className="absolute inset-4 md:inset-8 bg-surface-container-high rounded-xl rotate-3 transition-transform duration-700 hover:rotate-6 z-0" />
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-xl shadow-xl z-10" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAD-6Yvg2cAeQuLECOmyNCYH864bO7rBhXshGMT4abwyD7N53nDRF4BVBIxnqxbjBxhRn82GrQf1K8OwvtynDcJBwFP2c9MsYfalw6PBz7CooZXmM5i63CgFVr6vI_MGyGHBoFIqDN2iC7oQkUktHRev2XxIlgx9UVYU2Ilu3r7xYXoiDrWwU2TbtlnFoeB0r0DBT6FohhbWni1y_ruJSmEQ7SII0Be1CKMGfjE_8LVVyFMkeaouarBWw')" }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision (Asymmetric Split) */}
      <section className="w-full py-24 px-margin-mobile md:px-margin-desktop bg-surface-lowest">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-outline-variant to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary-container hidden lg:flex items-center justify-center z-10">
              <ArrowRightLeft className="w-4 h-4 text-on-secondary-container" />
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12 group">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                  <Flag className="w-5 h-5" />
                </span>
                <h2 className="font-headline-md text-headline-md text-on-background">Our Mission</h2>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed transition-colors duration-300 group-hover:text-on-background">
                To provide dependable, safe and efficient logistics solutions that help businesses move their cargo with confidence.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center pl-0 lg:pl-12 group mt-8 lg:mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                  <Eye className="w-5 h-5" />
                </span>
                <h2 className="font-headline-md text-headline-md text-on-background">Our Vision</h2>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed transition-colors duration-300 group-hover:text-on-background">
                To become a trusted logistics and transportation partner for businesses throughout Pakistan through professional service, operational excellence and long-term client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 bg-primary text-on-primary">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-on-primary/10">
            <div className="flex flex-col items-center justify-center p-4">
              <Truck className="w-10 h-10 text-secondary-fixed mb-4" />
              <h3 className="font-headline-xl text-headline-xl tabular-nums">250+</h3>
              <p className="font-label-bold text-label-bold text-on-primary-container mt-2 uppercase tracking-wider">Active Fleet Size</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <UserCheck className="w-10 h-10 text-secondary-fixed mb-4" />
              <h3 className="font-headline-xl text-headline-xl tabular-nums">150+</h3>
              <p className="font-label-bold text-label-bold text-on-primary-container mt-2 uppercase tracking-wider">Verified Drivers</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Map className="w-10 h-10 text-secondary-fixed mb-4" />
              <h3 className="font-headline-xl text-headline-xl tabular-nums">100%</h3>
              <p className="font-label-bold text-label-bold text-on-primary-container mt-2 uppercase tracking-wider">National Coverage</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <CheckCircle className="w-10 h-10 text-secondary-fixed mb-4" />
              <h3 className="font-headline-xl text-headline-xl tabular-nums">99.8%</h3>
              <p className="font-label-bold text-label-bold text-on-primary-container mt-2 uppercase tracking-wider">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full py-24 px-margin-mobile md:px-margin-desktop bg-surface relative overflow-hidden">
        <svg className="absolute -right-24 top-0 w-96 h-96 text-surface-container opacity-50" fill="currentColor" viewBox="0 0 200 200">
          <path d="M 0,100 C 0,44.77 44.77,0 100,0 C 155.23,0 200,44.77 200,100 C 200,155.23 155.23,200 100,200 C 44.77,200 0,155.23 0,100 Z" />
        </svg>
        <div className="max-w-[1024px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-label-bold text-label-bold text-secondary tracking-widest uppercase mb-4 block">Leadership</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Guided by Experience</h2>
          </div>
          
          <div className="bg-surface-lowest shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch">
            <div className="w-full md:w-2/5 relative">
              <div className="absolute inset-0 bg-primary/5" />
              <img 
                alt="Ibrar Khan, Director" 
                className="w-full h-full object-cover object-top min-h-[400px]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKd38dRcjS9_ubIIeWu9gR3Kw6EFOL2YJH0bvha-EudDyKv9rwm8V-_UnXaFnfsWpcxPTAf_P_eYMhT2ga6pue93As2qY_2n6hlPNkGJCJ-22norM2X9FdCioTwtEcuY7eF_72GsUnxUF9JuR4TnhCUCrsvFKlw9oDn0T92kgNkxOXXM1y9XyQI5mfWoNM-aD6d_H_o1dIv3vezoL_20EP9P4wHwojvXwosCDfoEDCZ3j-PMuIguCbZw" 
              />
            </div>
            
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-surface-lowest">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Ibrar Khan</h3>
              <p className="font-label-bold text-label-bold text-secondary mb-6 tracking-wide uppercase">Director, Bright Logistics</p>
              
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                <p>
                  With decades of hands-on experience navigating the complex logistical networks of Pakistan, Ibrar Khan established Bright Logistics to address a critical gap: the need for uncompromising reliability in freight and supply chain coordination.
                </p>
                <p>
                  Under his leadership, the company has grown from a regional transporter into a trusted partner for top-tier manufacturers and delicate healthcare importers. His philosophy is simple: <em>A promise made is cargo delivered.</em>
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-outline-variant flex flex-wrap items-center gap-6">
                <a className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors font-label-bold text-label-bold" href="tel:03000641481">
                  <Phone className="w-5 h-5" />
                  0300-0641481
                </a>
                <a className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors font-label-bold text-label-bold" href="mailto:info@brightlogistics.pk">
                  <Mail className="w-5 h-5" />
                  Contact Director
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Outro */}
      <section className="w-full py-12 bg-surface-container text-center px-margin-mobile">
        <div className="max-w-[800px] mx-auto flex flex-col items-center gap-4">
          <Building2 className="w-10 h-10 text-secondary" />
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Proudly Operating from Karachi, Pakistan</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Strategically located near major ports to ensure rapid deployment and receipt of critical shipments.</p>
        </div>
      </section>
    </div>
  );
}
