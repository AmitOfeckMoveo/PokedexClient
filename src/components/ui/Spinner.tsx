import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { spinnerVariants } from '@/lib/theme/components/spinner';

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  'aria-label'?: string;
}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size, className, 'aria-label': ariaLabel = 'Loading', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(spinnerVariants({ size }), className)}
        aria-label={ariaLabel}
        {...props}
      />
    );
  }
);
Spinner.displayName = 'Spinner';

export { Spinner, spinnerVariants };
