import * as React from 'react';
import { cn } from '@/lib/utils';
import { Text } from '../ui/Text';
import { Image } from '../ui/Image';
import {
  pokemonNameVariants,
  pokemonNameAvatarVariants,
  pokemonNameTypography,
  pokemonNameColor,
  pokemonNameTextGap,
  pokemonNameIconGap,
} from '@/lib/theme/components/pokemon/pokemon-name';
import pokeballImage from '@/assets/images/pokeball.png';

export interface PokemonNameProps {
  name: string;
  image: string;
  isOwned?: boolean;
  className?: string;
}

/**
 * PokemonName component - renders Pokemon name table cell with avatar and optional icon
 * 
 * @example
 * <PokemonName name="Bulbasaur" image="/path/to/image.png" />
 * <PokemonName name="Bulbasaur" image="/path/to/image.png" isOwned />
 */
export const PokemonName = React.forwardRef<HTMLDivElement, PokemonNameProps>(
  ({ name, image, isOwned = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pokemonNameVariants(), className)}
        {...props}
      >
        <div className={pokemonNameAvatarVariants()}>
          <Image
            src={image}
            alt={name}
            size="md"
            className="object-contain"
          />
        </div>

        <Text
          typography={pokemonNameTypography}
          color={pokemonNameColor}
          as="span"
          className={pokemonNameTextGap}
        >
          {name}
        </Text>

        {isOwned && (
          <Image
            src={pokeballImage}
            alt="Owned"
            size="xs"
            className={pokemonNameIconGap}
          />
        )}
      </div>
    );
  }
);

PokemonName.displayName = 'PokemonName';

