import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { imageVariants } from '@/lib/theme/components/image';

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {
  alt: string;
  backgroundColor?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, shape, size, padding, border, alt, backgroundColor, ...props }, ref) => {
    return (
      <img
        ref={ref}
        alt={alt}
        className={cn(
          imageVariants({ shape, size, padding, border }),
          backgroundColor,
          className
        )}
        {...props}
      />
    );
  }
);
Image.displayName = 'Image';

export { Image, imageVariants };

