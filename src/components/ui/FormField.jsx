/**
 * FormField
 * Reusable form field wrapper with label and input/select/textarea.
 * Supports two visual variants matching the existing form styles:
 *   - "outlined" (default): Full border, rounded — used on Quote page
 *   - "underlined": Bottom border only — used on Contact page
 *
 * Usage:
 *   <FormField label="Full Name" htmlFor="name" required>
 *     <input id="name" type="text" placeholder="John Doe" className={FormField.inputClass()} />
 *   </FormField>
 */

const OUTLINED_INPUT =
  'bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50';

const UNDERLINED_INPUT =
  'w-full bg-surface-bright border-b-2 border-outline-variant focus:border-primary text-on-surface font-body-md py-3 px-4 transition-colors outline-none hover:bg-surface-container-low rounded-t-md';

const OUTLINED_SELECT =
  'bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer';

const OUTLINED_TEXTAREA =
  'bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg outline-none border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50 resize-none';

const UNDERLINED_TEXTAREA =
  'w-full bg-surface-bright border-b-2 border-outline-variant focus:border-primary text-on-surface font-body-md py-3 px-4 transition-colors outline-none hover:bg-surface-container-low rounded-t-md resize-none';

export default function FormField({ label, htmlFor, required, children, colSpan, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${colSpan === 2 ? 'md:col-span-2' : ''} ${className}`}>
      <label
        className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider"
        htmlFor={htmlFor}
      >
        {label}
        {required && ' *'}
      </label>
      {children}
    </div>
  );
}

// Expose class constants for direct use in input/select/textarea elements
FormField.inputClass = (variant = 'outlined') =>
  variant === 'underlined' ? UNDERLINED_INPUT : OUTLINED_INPUT;

FormField.selectClass = () => OUTLINED_SELECT;

FormField.textareaClass = (variant = 'outlined') =>
  variant === 'underlined' ? UNDERLINED_TEXTAREA : OUTLINED_TEXTAREA;
