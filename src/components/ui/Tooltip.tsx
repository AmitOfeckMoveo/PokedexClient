import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { tooltipVariants } from '@/lib/theme/components/tooltip';

export interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {
  typography?: string;
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, typography = 'sub-body-regular', backgroundColor, textColor, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          tooltipVariants(),
          typography,
          backgroundColor, 
          textColor,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Tooltip.displayName = 'Tooltip';

export { Tooltip, tooltipVariants };

