/**
 * CTABanner
 * Full-width conversion banner with dark background, compelling headline,
 * and a high-contrast CTA button. Used at the bottom of every page to
 * nudge users toward the quote form or contact page.
 *
 * Usage:
 *   <CTABanner
 *     headline="Ready to Move Your Cargo?"
 *     description="Get a free quote in minutes."
 *     buttonText="Request a Quote"
 *     buttonHref="/quote"
 *   />
 */
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({
  headline = 'Ready to Move Your Cargo?',
  description = 'Get a customized logistics solution tailored to your business. Our team responds within 24 hours.',
  buttonText = 'Request a Quote',
  buttonHref = '/quote',
  className = '',
}) {
  return (
    <section className={`w-full bg-primary-container py-16 lg:py-20 relative overflow-hidden ${className}`}>
      {/* Decorative gradient orb */}
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-secondary-container rounded-full blur-[120px] opacity-15 pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-primary-fixed-dim rounded-full blur-[80px] opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-headline-lg text-on-primary mb-3">{headline}</h3>
          <p className="text-body-md text-on-primary-container">{description}</p>
        </div>
        <Link
          href={buttonHref}
          className="bg-secondary-container text-on-secondary-fixed-variant px-10 py-4 rounded-lg text-label-bold uppercase tracking-widest hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group whitespace-nowrap"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

