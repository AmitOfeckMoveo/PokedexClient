import * as React from 'react';
import { Image, type ImageProps } from './Image';

export interface PokemonImage {
  sprite?: string;
  thumbnail?: string;
  hires?: string;
}

export interface PokemonImageProps
  extends Omit<ImageProps, 'src' | 'alt'> {
  pokemonImage: PokemonImage;
  imageVariant?: 'sprite' | 'thumbnail' | 'hires';
  alt: string;
}

const PokemonImage = React.forwardRef<HTMLImageElement, PokemonImageProps>(
  ({ pokemonImage, imageVariant = 'thumbnail', alt, ...imageProps }, ref) => {
    const imageSrc = 
      pokemonImage[imageVariant] || 
      pokemonImage.thumbnail || 
      pokemonImage.sprite || 
      pokemonImage.hires;

    if (!imageSrc) {
      console.warn('PokemonImage component: No valid image source found in pokemonImage');
      return null;
    }

    return (
      <Image
        ref={ref}
        src={imageSrc}
        alt={alt}
        {...imageProps}
      />
    );
  }
);
PokemonImage.displayName = 'PokemonImage';

export { PokemonImage };

