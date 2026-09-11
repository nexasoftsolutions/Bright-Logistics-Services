/**
 * StatsCounter
 * Animated statistics counter that counts up from 0 when scrolled into view.
 * Uses IntersectionObserver for scroll-triggered activation.
 *
 * Usage:
 *   <StatsCounter
 *     stats={[
 *       { value: '250+', label: 'Active Fleet' },
 *       { value: '99.8%', label: 'On-Time Delivery' },
 *     ]}
 *   />
 */
'use client';

import { useState, useEffect, useRef } from 'react';

function parseValue(str) {
  // Extract the numeric part and any suffix (e.g., "250+" → 250, "+")
  const match = str.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: str };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

function CountUpNumber({ value, isVisible }) {
  const { num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000; // ms
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * num);

      if (current >= steps) {
        setDisplay(num);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, num]);

  // Format: preserve decimal places from the original value
  const hasDecimal = value.includes('.');
  const formatted = hasDecimal ? display.toFixed(1) : Math.floor(display);

  return (
    <span>
      {formatted}{suffix}
    </span>
  );
}

export default function StatsCounter({
  stats,
  className = '',
  valueClassName = 'text-headline-xl text-primary',
  labelClassName = 'text-label-bold text-outline uppercase mt-2',
  variant = 'light', // 'light' or 'dark'
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Guard against undefined stats during SSR prerender
  if (!stats || !stats.length) return null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const darkStyles = {
    container: 'bg-primary text-on-primary',
    value: 'text-headline-xl text-on-primary',
    label: 'text-label-bold text-on-primary-container uppercase mt-2',
  };

  const lightStyles = {
    container: 'bg-surface',
    value: valueClassName,
    label: labelClassName,
  };

  const styles = variant === 'dark' ? darkStyles : lightStyles;

  const colsMap = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' };
  const gridCols = colsMap[Math.min(stats.length, 4)] || 'md:grid-cols-4';

  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-2 ${gridCols} gap-6 ${className}`}
    >
      {stats.map((stat, i) => (
        <div key={stat.id || i} className={`${styles.container} p-6 rounded-lg shadow-sm text-center`}>
          <span className={`${styles.value} block mb-2`}>
            <CountUpNumber value={stat.value} isVisible={isVisible} />
          </span>
          <span className={styles.label}>{stat.label}</span>
          {stat.icon && <div className="mt-3">{stat.icon}</div>}
        </div>
      ))}
    </div>
  );
}

