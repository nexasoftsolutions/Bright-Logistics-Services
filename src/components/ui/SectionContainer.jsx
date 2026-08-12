/**
 * SectionContainer
 * Reusable max-width content wrapper with responsive padding.
 * Used across all pages for consistent horizontal containment.
 */
export default function SectionContainer({ children, className = '', as: Tag = 'div', ...props }) {
  return (
    <Tag className={`max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop ${className}`} {...props}>
      {children}
    </Tag>
  );
}
