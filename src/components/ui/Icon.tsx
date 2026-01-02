import * as React from 'react';
import { cn } from '@/lib/utils';
import { iconRegistry, type IconName } from './icons';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> {
  name: IconName;
  size?: number;
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
        {...(size ? { width: size, height: size } : {})}
        className={cn("flex-shrink-0 inline-block", className)}
        {...props}
      />
    );
  }
);
Icon.displayName = 'Icon';

export { Icon, type IconName };

