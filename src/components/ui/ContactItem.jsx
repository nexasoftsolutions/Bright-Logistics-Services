/**
 * ContactItem
 * Reusable contact information row with icon bubble, title, and value.
 * Used on the Contact page and Quote page sidebar.
 *
 * Usage:
 *   <ContactItem
 *     icon={<Phone className="w-6 h-6" />}
 *     title="Main Office"
 *     value="0300-0641482"
 *     href="tel:03000641482"
 *   />
 */
export default function ContactItem({
  icon,
  title,
  value,
  href,
  children,
  iconClassName = 'w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300 shadow-sm shrink-0',
  className = '',
}) {
  return (
    <div className={`flex items-start gap-4 group ${className}`}>
      <div className={iconClassName}>
        {icon}
      </div>
      <div>
        <h3 className="font-headline-sm text-on-surface">{title}</h3>
        {href ? (
          <a
            className="font-body-md text-on-surface-variant mt-1 hover:text-secondary transition-colors block"
            href={href}
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {value}
          </a>
        ) : (
          value && <p className="font-body-md text-on-surface-variant mt-1">{value}</p>
        )}
        {children}
      </div>
    </div>
  );
}
