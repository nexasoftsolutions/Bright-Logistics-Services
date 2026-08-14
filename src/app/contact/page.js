'use client';

import { MapPin, Phone, MessageCircle, User, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionContainer from '@/components/ui/SectionContainer';
import ContactItem from '@/components/ui/ContactItem';
import FormField from '@/components/ui/FormField';

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <PageHero
        backgroundImage="url('https://lh3.googleusercontent.com/aida-public/AB6AXuCccAvB64SHakh6sI6zlntsUiiDtsw_0GWFCtjcMSuRdRTYIF6caXtFV9b0zVEt0aPRSwfu6GhChwctK-oDYkb_AaOcEiUOKc5nh3JhQwuRA3Jkl4z1kpqZ8pPqIJTvxJ0sETnlRT5S4tqlelb208ELsUilOcitswZsBLPIiW6Xp4SWWsbt1h0qJY0YedIJcamQbRljPaLoXHqF-QxuWgsM8PZfOOKzF2dPg3NIryjNPRyV9sk8UJPmtg')"
        title="Contact Us"
        subtitle="Get in touch with Bright Logistics Services. We are here to answer your questions and provide the transportation solutions you need."
      />

      {/* Content Section */}
      <section className="w-full bg-surface py-10 lg:py-24 flex-grow">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-12 relative z-10">
              <div className="space-y-8 bg-surface-container-lowest p-8 lg:p-12 shadow-xl rounded-2xl">
                <div>
                  <h2 className="font-headline-lg text-primary mb-2">Reach Out</h2>
                  <p className="font-body-md text-on-surface-variant">We operate a 24/7 control center to ensure your cargo never stops moving.</p>
                </div>
                
                <div className="space-y-6">
                  <ContactItem 
                    icon={<MapPin className="w-6 h-6" />} 
                    title="Headquarters" 
                    value="Karachi, Pakistan" 
                  />
                  
                  <ContactItem 
                    icon={<Phone className="w-6 h-6" />} 
                    title="Main Office" 
                    value="0300-0641482" 
                    href="tel:03000641482" 
                  />
                  
                  <ContactItem 
                    icon={<MessageCircle className="w-6 h-6" />} 
                    title="WhatsApp Support" 
                    value="0300-0641482" 
                    href="https://wa.me/923000641482" 
                  />
                  
                  <ContactItem 
                    icon={<User className="w-6 h-6" />} 
                    title="Director" 
                  >
                    <p className="font-body-md text-on-surface-variant mt-1">Ibrar Khan</p>
                    <a className="font-body-md text-on-surface-variant mt-1 hover:text-secondary transition-colors block" href="tel:03000641481">
                      0300-0641481
                    </a>
                  </ContactItem>
                </div>
              </div>
            </div>
            
            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 relative z-10">
              <div className="bg-surface-container-lowest p-8 lg:p-12 shadow-2xl rounded-2xl h-full">
                <div className="mb-8">
                  <h2 className="font-headline-lg text-primary mb-2">Send a Message</h2>
                  <p className="font-body-md text-on-surface-variant">Fill out the form below and our operations team will respond within 24 hours.</p>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField label="Full Name" htmlFor="name" required>
                      <input 
                        className={FormField.inputClass('underlined')}
                        id="name" 
                        placeholder="Jane Doe" 
                        required 
                        type="text" 
                      />
                    </FormField>
                    <FormField label="Email Address" htmlFor="email" required>
                      <input 
                        className={FormField.inputClass('underlined')}
                        id="email" 
                        placeholder="jane@company.com" 
                        required 
                        type="email" 
                      />
                    </FormField>
                  </div>
                  <FormField label="Subject / Reference" htmlFor="subject" required>
                    <input 
                      className={FormField.inputClass('underlined')}
                      id="subject" 
                      placeholder="Inquiry regarding shipment #BLS-..." 
                      required 
                      type="text" 
                    />
                  </FormField>
                  <FormField label="Message" htmlFor="message" required>
                    <textarea 
                      className={FormField.textareaClass('underlined')}
                      id="message" 
                      placeholder="Provide details about your logistics needs..." 
                      required 
                      rows="5" 
                    />
                  </FormField>
                  <button 
                    className="w-full md:w-auto bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary px-8 py-4 rounded-lg font-label-bold tracking-widest uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-3" 
                    type="submit"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </SectionContainer>
      </section>

      {/* Map Section */}
      <section className="w-full bg-surface py-12">
        <SectionContainer>
          <div className="w-full h-[400px] lg:h-[500px] rounded-2xl shadow-xl overflow-hidden relative group">
            <iframe 
              allowFullScreen 
              height="100%" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.8966702845!2d66.8258031!3d24.8462667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0660293fd7%3A0xad202874294c314e!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
              style={{ border: 0 }} 
              width="100%"
            />
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
