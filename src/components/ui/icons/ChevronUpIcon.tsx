import * as React from 'react';

export const ChevronUpIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
        d="M1.1802 -5.25411e-07L0.000195376 1.18L6.6002 7.78L13.2002 1.18L12.0202 -5.15794e-08L6.6002 5.42L1.1802 -5.25411e-07Z"
        fill="currentColor"
      />
    </svg>
  )
);
ChevronUpIcon.displayName = 'ChevronUpIcon';

