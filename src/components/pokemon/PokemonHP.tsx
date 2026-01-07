import * as React from 'react';
import { cn } from '@/lib/utils';
import { Text } from '../ui/Text';
import { Icon } from '../ui/Icon';
import { 
  pokemonHpVariants, 
  pokemonHpTypographyMap,
  pokemonHpIconVariants
} from '@/lib/theme/components/pokemon/hp';

export interface PokemonHPProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  value: number;
  size?: 'sm' | 'md';
  showLabel?: boolean;
  className?: string;
}

/**
 *
 * @example
 * <PokemonHP value={70} />
 * <PokemonHP value={70} showLabel />
 * <PokemonHP value={70} size="sm" />
 */
export const PokemonHP = React.forwardRef<HTMLDivElement, PokemonHPProps>(
    ({ value, size = 'md', showLabel = false, className, ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={cn(pokemonHpVariants({ size }), className)}
          {...props}
        >
          {showLabel && (
            <span className="font-mulish text-caption-bold text-primary-500 leading-none">
              HP
            </span>
          )}
  
          <span
            className={cn(
              'font-mulish font-normal text-primary-500 leading-none',
              pokemonHpTypographyMap[size]
            )}
          >
            {value}
          </span>
  
          <Icon
            name="electric-bolt"
            className={pokemonHpIconVariants[size]}
          />
        </div>
      );
    }
  );
  

PokemonHP.displayName = 'PokemonHP';

