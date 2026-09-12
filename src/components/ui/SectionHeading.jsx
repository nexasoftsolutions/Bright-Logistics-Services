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
import React from 'react';
import ScrollReveal from './ScrollReveal';

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
  const alignClass = alignCenter ? 'items-center text-center' : 'items-start text-left';

  return (
    <ScrollReveal delay={100} className={`flex flex-col ${alignClass} ${className} w-full`}>
      {eyebrow && (
        <span className={`font-label-bold text-label-bold uppercase tracking-widest mb-3 block ${eyebrowClassName}`}>
          {eyebrow}
        </span>
      )}
      {title && (
        <TitleTag className={`font-headline-lg text-headline-lg ${titleClassName}`}>
          {title}
        </TitleTag>
      )}
      {subtitle && (
        <p className={`font-body-md text-body-md ${subtitleClassName} mt-4 max-w-3xl`}>
          {subtitle}
        </p>
      )}
      {children && (
        <div className="mt-6 w-full">
          {children}
        </div>
      )}
    </ScrollReveal>
  );
}
