import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { textVariants } from '@/lib/theme/components/text';

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, typography, color, truncate, as, children, ...props }, ref) => {
    const Component = as || 'p';
    
    return (
      <Component
        className={cn(textVariants({ typography, color, truncate }), className)}
        ref={ref as any}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Text.displayName = 'Text';

export { Text, textVariants };

