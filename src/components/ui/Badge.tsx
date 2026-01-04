import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { badgeVariants } from '@/lib/theme/components/badge';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  typography?: string;
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, typography = 'caption-regular', backgroundColor, textColor, children, ...props }, ref) => {
    return (
      <span
        className={cn(
          badgeVariants(),
          typography,
          backgroundColor,
          textColor,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };

