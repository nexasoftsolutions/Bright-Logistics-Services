/**
 * TrustBadge
 * Reusable trust/feature indicator badge with icon circle, title, and description.
 * Used on the Quote page trust section and reusable elsewhere.
 *
 * Usage:
 *   <TrustBadge
 *     icon={<ShieldCheck className="w-8 h-8" />}
 *     title="Secure Transport"
 *     description="Fully insured cargo movement"
 *   />
 */
export default function TrustBadge({ icon, title, description, className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary mb-2">
        {icon}
      </div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface">{title}</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>
    </div>
  );
}
