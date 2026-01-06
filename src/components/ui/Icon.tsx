import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { iconRegistry, type IconName } from './icons';
import { iconVariants } from '@/lib/theme/components/icon';

export interface IconProps 
  extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> {
  name: IconName;
  size?: VariantProps<typeof iconVariants>['size'];
  className?: string;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size, className, ...props }, ref) => {
    const IconComponent = iconRegistry[name];
    
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found in registry`);
      return null;
    }

    return (
      <IconComponent
        ref={ref}
        className={cn(iconVariants({ size }), className)}
        {...props}
      />
    );
  }
);
Icon.displayName = 'Icon';

export { Icon, type IconName };
