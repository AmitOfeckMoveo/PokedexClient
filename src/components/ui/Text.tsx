import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * @default 'body-regular'
   */
  typography?: string;
  /**
   */
  color?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, typography = 'body-regular', color, as, children, ...props }, ref) => {
    const Component = as || 'p';
    
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

