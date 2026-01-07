import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { iconRegistry, type IconName } from './icons';
import { iconVariants } from '@/lib/theme/components/icon';

export interface IconProps 
  extends Omit<React.SVGProps<SVGSVGElement>, 'children'> {
  name: IconName;
  size?: VariantProps<typeof iconVariants>['size'];
  className?: string;
}

export function Icon({ name, size, className, ...props }: IconProps) {
  const Svg = iconRegistry[name];

  if (!Svg) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  return (
    <Svg
      focusable={false}
      aria-hidden="true"
      className={cn(iconVariants({ size }), className)}
      {...props}
    />
  );
}

export { type IconName };
