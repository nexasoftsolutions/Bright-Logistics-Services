import HeroSlideshow from './HeroSlideshow';

/**
 * PageHero
 * Reusable hero/banner section for secondary pages.
 * Renders a full-width banner with background image, overlay, and centered text.
 *
 * Handles the common 3-layer pattern:
 *   1. Background image (absolute positioned)
 *   2. Dark overlay with optional blur
 *   3. Centered title + subtitle text
 *
 * Usage:
 *   <PageHero
 *     backgroundImage="https://..."
 *     title="Contact Us"
 *     subtitle="Get in touch with us."
 *   />
 */
export default function PageHero({
  backgroundImage,
  title,
  subtitle,
  overlayClassName = 'bg-primary/70 backdrop-blur-sm',
  sectionClassName = '',
  titleClassName = 'text-headline-xl text-on-primary mb-4',
  subtitleClassName = 'text-body-lg text-on-primary-container max-w-2xl mx-auto',
  children,
}) {
  // We now ignore any passed backgroundImage to ensure all heroes get the dynamic slideshow
  return (
    <section
      className={`relative w-full min-h-[300px] md:min-h-[400px] flex items-center justify-center -mt-20 pt-20 ${sectionClassName}`}
    >
      <div className="absolute inset-0 z-0">
        <HeroSlideshow useNextImage={true} />
      </div>
      <div className={`absolute inset-0 z-10 ${overlayClassName}`} />
      <div className="relative z-20 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop w-full text-center">
        <h1 className={titleClassName}>{title}</h1>
        {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
