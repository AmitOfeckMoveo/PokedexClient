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
 * PokemonHP Component
 *
 * Displays HP value with optional label and electric bolt icon.
 * Pixel-perfect match to Figma specifications.
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
        className={cn(
          pokemonHpVariants({ size }),
          className
        )}
        {...props}
      >
        {showLabel && (
          <Text typography="caption-bold" color="primary-500" as="span">
            HP
          </Text>
        )}
        <span 
          className={cn(
            'font-mulish font-normal text-primary-500',
            pokemonHpTypographyMap[size]
          )}
        >
          {value}
        </span>
        <Icon
          name="electric-bolt"
          className={cn(
            size === 'sm' ? 'w-hp-icon-sm h-hp-icon-sm' : 'w-hp-icon-md h-hp-icon-md',
            pokemonHpIconVariants[size],
            'flex-shrink-0'
          )}
        />
      </div>
    );
  }
);

PokemonHP.displayName = 'PokemonHP';

