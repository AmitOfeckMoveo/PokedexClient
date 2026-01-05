import * as React from 'react';

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M1.1802 7.78003L0.000195376 6.60003L6.6002 2.93026e-05L13.2002 6.60003L12.0202 7.78003L6.6002 2.36003L1.1802 7.78003Z"
        fill="currentColor"
      />
    </svg>
  )
);
ChevronDownIcon.displayName = 'ChevronDownIcon';

