import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = 'sm', className }, ref) => {
    const sizeClasses = {
      sm: 'h-spinner-size-sm w-spinner-size-sm',
      md: 'h-spinner-size-md w-spinner-size-md',
      lg: 'h-spinner-size-lg w-spinner-size-lg',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-block animate-spin rounded-full border-2 border-current border-t-transparent',
          sizeClasses[size],
          className
        )}
        aria-label="Loading"
      />
    );
  }
);
Spinner.displayName = 'Spinner';

export { Spinner };

