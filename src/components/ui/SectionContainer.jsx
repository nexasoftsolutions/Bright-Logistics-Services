/**
 * SectionContainer
 * Reusable max-width content wrapper with responsive padding.
 * Used across all pages for consistent horizontal containment.
 */
export default function SectionContainer({ children, className = '', as: Tag = 'div', theme, ...props }) {
  const themeClass = theme === 'dark' ? 'text-on-primary' : '';
  return (
    <Tag className={`max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop ${themeClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
