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
  titleClassName = 'font-headline-xl text-on-primary mb-4',
  subtitleClassName = 'font-body-lg text-on-primary-container max-w-2xl mx-auto',
  children,
}) {
  return (
    <section
      className={`relative w-full h-[400px] flex items-center justify-center -mt-20 pt-20 bg-cover bg-center ${sectionClassName}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop w-full text-center">
        <h1 className={titleClassName}>{title}</h1>
        {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
