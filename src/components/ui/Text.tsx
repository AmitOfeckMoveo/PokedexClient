import * as React from 'react';
import { cn } from '@/lib/utils';
import { Tooltip } from './Tooltip';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  typography?: string;
  color?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  tooltip?: React.ReactNode;
  tooltipTypography?: string;
  tooltipBackgroundColor?: string;
  tooltipTextColor?: string;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, typography = 'body-regular', color, as, tooltip, tooltipTypography, tooltipBackgroundColor, tooltipTextColor, children, ...props }, ref) => {
    const Component = as || 'p';
    
    if (tooltip) {
      return (
        <span className="relative inline group">
          <Component
            className={cn(typography, color, 'inline-block', className)}
            ref={ref as any}
            {...props}
          >
            {children}
          </Component>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-max max-w-[325px]">
            <Tooltip 
              typography={tooltipTypography}
              backgroundColor={tooltipBackgroundColor}
              textColor={tooltipTextColor}
            >
              {tooltip}
            </Tooltip>
          </div>
        </span>
      );
    }

    return (
      <Component
        className={cn(typography, color, className)}
        ref={ref as any}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Text.displayName = 'Text';

export { Text };

