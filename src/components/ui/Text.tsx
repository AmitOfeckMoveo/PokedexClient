import * as React from 'react';
import { cn } from '@/lib/utils';
import { TooltipWrapper } from './TooltipWrapper';

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
  ({ 
    className, 
    typography = 'body-regular', 
    color, 
    as, 
    tooltip, 
    tooltipTypography, 
    tooltipBackgroundColor, 
    tooltipTextColor, 
    children, 
    ...props 
  }, ref) => {
    const Component = as || 'p';
    const hasTooltip = Boolean(tooltip);
    
    const content = (
      <Component
        className={cn(typography, color, hasTooltip && 'inline-block', className)}
        ref={ref as any}
        {...props}
      >
        {children}
      </Component>
    );

    if (!hasTooltip) return content;

    return (
      <TooltipWrapper
        content={tooltip}
        typography={tooltipTypography}
        backgroundColor={tooltipBackgroundColor}
        textColor={tooltipTextColor}
      >
        {content}
      </TooltipWrapper>
    );
  }
);
Text.displayName = 'Text';

export { Text };

