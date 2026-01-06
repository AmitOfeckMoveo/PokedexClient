import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { tooltipVariants, tooltipArrowVariants } from '@/lib/theme/components/tooltip';

export interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {
  children: React.ReactNode;
}

/**
 * Tooltip - Pure presentation component
 * Renders tooltip container and arrow only.
 * No positioning, no hover logic, no behavior.
 */
const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, tone, size, children, ...props }, ref) => {
    return (
      <div
        className={cn(tooltipVariants({ tone, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
        <div className={cn(tooltipArrowVariants({ tone, size }))} />
      </div>
    );
  }
);
Tooltip.displayName = 'Tooltip';

export { Tooltip, tooltipVariants };
