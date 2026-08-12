/**
 * SectionHeading
 * Reusable heading block with optional eyebrow label, title, and subtitle.
 * Supports flexible alignment and color customization via className props.
 * 
 * Usage:
 *   <SectionHeading
 *     eyebrow="Our Services"
 *     title="Comprehensive Logistics Solutions"
 *     subtitle="From warehousing to last-mile delivery..."
 *     align="center"
 *   />
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  eyebrowClassName = 'text-secondary',
  titleClassName = 'text-on-surface',
  subtitleClassName = 'text-on-surface-variant',
  titleAs: TitleTag = 'h2',
  className = '',
  children,
}) {
  const alignCenter = align === 'center';

  return (
    <div className={`${alignCenter ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span
          className={`font-label-bold text-label-bold ${eyebrowClassName} uppercase tracking-widest block mb-4`}
        >
          {eyebrow}
        </span>
      )}
      <TitleTag className={`font-headline-lg text-headline-lg ${titleClassName}`}>
        {title}
      </TitleTag>
      {subtitle && (
        <p
          className={`font-body-md text-body-md ${subtitleClassName} max-w-2xl mt-4 ${alignCenter ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
