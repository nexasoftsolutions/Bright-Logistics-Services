'use client';

import { 
  ClipboardList, ArrowRight, CircleDot, MapPin, Send, 
  Headset, Smartphone, Phone, Mail, Map, 
  ShieldCheck, Clock, Globe 
} from 'lucide-react';

export default function Quote() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quote Request Submitted!');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section 
        className="bg-primary pt-24 pb-16 relative overflow-hidden flex items-center justify-center min-h-[40vh]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 6, 19, 0.7), rgba(0, 6, 19, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYLbFhXiNZ3nlt4pGT7OsrQWtkoCnxmvpjaixQN6_ePawaW7lw10YU2a650xf7cM8H3FDblHp4JskugeQWRzk2Jnirmz2uKSbcVlADuEc5_ofBx0174iRLQH1oeG1fgR0Uz3ft66yt4HGU7BXyBtJOFY344KL-FFupgmuUXfRunWi84hvNNlJ3L87CLVB2Zp2zG7BOJL2wcrVPyMiu8bCdfjAWidnD_eZzyTQkOTtN16ggzeonGcO0aQ")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center center' 
        }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <svg className="absolute bottom-0 left-10 w-64 h-64 text-on-primary-fixed-variant opacity-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="max-w-[1440px] w-full px-margin-mobile lg:px-margin-desktop relative z-10 text-center">
          <h1 className="font-headline-xl text-headline-xl text-on-primary mb-6 animate-[fade-in-up_0.8s_ease-out]">
            Request a Logistics Quote
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto animate-[fade-in-up_1s_ease-out_0.2s_both]">
            Provide us with the details of your shipment, and our logistics experts will provide a customized, competitive quote tailored to your timeline and cargo requirements.
          </p>
        </div>
      </section>

      {/* Main Content Area: Form & Contact Info */}
      <section className="max-w-[1440px] w-full mx-auto px-margin-mobile lg:px-margin-desktop py-16 -mt-10 z-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          
          {/* Left Column: Quote Form */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-8 flex items-center gap-3">
              <ClipboardList className="w-6 h-6 text-secondary-container" />
              Shipment Details
            </h2>
            <form className="space-y-8" id="quoteForm" onSubmit={handleSubmit}>
              
              {/* Section: Contact Info */}
              <div className="bg-surface p-6 rounded-lg shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 border-b-2 border-surface-variant pb-2">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="fullName">Full Name *</label>
                    <input className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50" id="fullName" placeholder="John Doe" required type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="companyName">Company Name</label>
                    <input className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50" id="companyName" placeholder="Acme Corp" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="email">Email Address *</label>
                    <input className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50" id="email" placeholder="john@example.com" required type="email" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="phone">Phone Number *</label>
                    <input className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50" id="phone" placeholder="+1 (555) 000-0000" required type="tel" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="whatsapp">WhatsApp Number (Optional)</label>
                    <input className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50" id="whatsapp" placeholder="For faster communication" type="tel" />
                  </div>
                </div>
              </div>

              {/* Section: Routing Details */}
              <div className="bg-surface p-6 rounded-lg shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 border-b-2 border-surface-variant pb-2">
                  Routing Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  {/* Visual Connector Line for Desktop */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 border-t-2 border-dashed border-outline-variant z-0" />
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-surface-container-lowest rounded-full items-center justify-center z-10 shadow-sm text-primary border border-surface-variant">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  
                  <div className="flex flex-col gap-2 relative z-20">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-2" htmlFor="pickupLocation">
                      <CircleDot className="w-4 h-4 text-secondary-container" /> Pickup Location *
                    </label>
                    <input className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50" id="pickupLocation" placeholder="City, Port, or Address" required type="text" />
                  </div>
                  
                  <div className="flex flex-col gap-2 relative z-20">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-2" htmlFor="deliveryLocation">
                      <MapPin className="w-4 h-4 text-secondary-container" /> Delivery Location *
                    </label>
                    <input className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50" id="deliveryLocation" placeholder="City, Port, or Address" required type="text" />
                  </div>
                  
                  <div className="flex flex-col gap-2 md:col-span-2 mt-4">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="requiredDate">Required Date *</label>
                    <input className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" id="requiredDate" required type="date" />
                  </div>
                </div>
              </div>

              {/* Section: Cargo Details */}
              <div className="bg-surface p-6 rounded-lg shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 border-b-2 border-surface-variant pb-2">
                  Cargo Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="cargoType">Cargo Type *</label>
                    <select className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer" id="cargoType" required defaultValue="">
                      <option disabled value="">Select Cargo Type</option>
                      <option value="general">General Merchandise</option>
                      <option value="perishable">Perishable Goods</option>
                      <option value="hazardous">Hazardous Materials</option>
                      <option value="oversized">Oversized / Heavy Machinery</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="cargoWeight">Estimated Weight (kg/tons) *</label>
                    <input className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50" id="cargoWeight" placeholder="e.g., 5000 kg" required type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="containerSize">Container Size</label>
                    <select className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer" id="containerSize" defaultValue="">
                      <option disabled value="">Select Container (Optional)</option>
                      <option value="20ft">20ft Standard</option>
                      <option value="40ft">40ft Standard</option>
                      <option value="40hc">40ft High Cube</option>
                      <option value="lcl">LCL (Less than Container Load)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="vehicleRequired">Vehicle Required</label>
                    <select className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer" id="vehicleRequired" defaultValue="">
                      <option disabled value="">Select Vehicle (Optional)</option>
                      <option value="flatbed">Flatbed Truck</option>
                      <option value="reefer">Refrigerated Truck</option>
                      <option value="box">Box Truck</option>
                      <option value="van">Cargo Van</option>
                      <option value="not_sure">Not Sure</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="additionalDetails">Additional Details</label>
                    <textarea className="bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50 resize-none" id="additionalDetails" placeholder="Provide any special handling instructions, specific dimensions, or other requirements..." rows="4" />
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="pt-4 flex justify-end">
                <button className="bg-secondary-container hover:bg-secondary text-on-secondary-fixed-variant hover:text-on-secondary font-label-bold text-label-bold uppercase tracking-wider py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-3 transform hover:-translate-y-1" type="submit">
                  <span>Request a Quote</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
          
          {/* Right Column: Contact Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-primary text-on-primary rounded-xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-container rounded-full opacity-50 blur-2xl pointer-events-none" />
              <h3 className="font-headline-sm text-headline-sm mb-6 flex items-center gap-3 relative z-10">
                <Headset className="w-6 h-6 text-secondary-container" />
                Need Immediate Assistance?
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary-container mb-8 relative z-10">
                Skip the form and talk directly to our logistics planners. We're available 24/7 to handle urgent cargo requirements.
              </p>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary-fixed-variant transition-colors">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-primary-container uppercase tracking-wider mb-1">Director</p>
                    <a className="font-headline-md text-headline-md hover:text-secondary-container transition-colors" href="tel:03000641481">0300-0641481</a>
                    <p className="font-body-sm text-body-sm text-on-primary-container">Ibrar Khan</p>
                  </div>
                </div>
                
                <div className="w-full h-px bg-on-primary-fixed-variant/30" />
                
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary-fixed-variant transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-primary-container uppercase tracking-wider mb-1">Office</p>
                    <a className="font-headline-md text-headline-md hover:text-secondary-container transition-colors" href="tel:03000641482">0300-0641482</a>
                  </div>
                </div>
                
                <div className="w-full h-px bg-on-primary-fixed-variant/30" />
                
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary-fixed-variant transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-primary-container uppercase tracking-wider mb-1">Email</p>
                    <a className="font-body-md text-body-md hover:text-secondary-container transition-colors break-all" href="mailto:info@brightlogistics.pk">info@brightlogistics.pk</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Headquarters Map Card */}
            <div className="bg-surface-container-lowest rounded-xl shadow-md p-6 border border-outline-variant/30">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Our Headquarters</h3>
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg shadow-inner mb-4 overflow-hidden relative group cursor-pointer" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAayyPJnTegWKiirIX6GxBCHJXk3ILKVPlj66wgBzlFFeGx4n7efL1lm4vfHBwkYVZnHOQIy_Qx5LsiQz74KX69q6vLNSPLk_8JeuYr-27JF38UoWtwkus1i17v6QCER1xl-214AcbtjPRPvCruJwlYZF9ftcdsZjeYGwTA-RSQgKCrCFBoJDSQ6pByHxocJwqqsEhBtJqf9ySFRWj3PfIyAmEd8aUhtlQTQ0qIjtnXuMd50Dne6I7lxQ')" }}
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 bg-surface-container-lowest/90 backdrop-blur-sm p-2 rounded flex items-center gap-1 shadow-sm">
                  <Map className="w-4 h-4 text-primary" />
                  <span className="font-label-bold text-label-bold text-primary text-[10px] uppercase">View Map</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary-container mt-1" />
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Karachi, Pakistan<br />
                  <span className="font-body-sm text-body-sm mt-1 block">Strategic Hub for Global &amp; Domestic Transit</span>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="bg-surface-container py-16 border-t border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary mb-2">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">Secure Transport</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Fully insured cargo movement</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary mb-2">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">On-Time Delivery</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Strict adherence to schedules</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary mb-2">
                <Globe className="w-8 h-8" />
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">Global Network</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Extensive routing options</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary mb-2">
                <Headset className="w-8 h-8" />
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">24/7 Support</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Dedicated logistics team</p>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
