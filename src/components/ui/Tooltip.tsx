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
    // Determine arrow color - use backgroundColor if provided, otherwise default to neutrals-1000
    const arrowColor = backgroundColor 
      ? backgroundColor.replace('bg-', 'border-t-') 
      : 'border-t-neutrals-1000';
    
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
        {/* Arrow pointer pointing down */}
        <div className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent",
          arrowColor
        )} />
      </div>
    );
  }
);
Tooltip.displayName = 'Tooltip';

export { Tooltip, tooltipVariants };

