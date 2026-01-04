import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { imageVariants } from '@/lib/theme/components/image';

export interface PokemonImage {
  sprite?: string;
  thumbnail?: string;
  hires?: string;
}

export interface ImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>,
    VariantProps<typeof imageVariants> {
  alt: string;
  src?: string;
  pokemonImage?: PokemonImage;
  imageVariant?: 'sprite' | 'thumbnail' | 'hires';
  backgroundColor?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, shape, size, alt, src, pokemonImage, imageVariant = 'thumbnail', backgroundColor, ...props }, ref) => {
    const imageSrc = pokemonImage 
      ? pokemonImage[imageVariant] || pokemonImage.thumbnail || pokemonImage.sprite || pokemonImage.hires
      : src;

    if (!imageSrc) {
      console.warn('Image component: No src or pokemonImage provided');
      return null;
    }

    return (
      <img
        ref={ref}
        alt={alt}
        src={imageSrc}
        className={cn(
          imageVariants({ shape, size }),
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

