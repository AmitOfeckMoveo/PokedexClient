import * as React from 'react';
import { cn } from '@/lib/utils';
import { 
  pokemonTypeVariants, 
  pokemonTypeClassMap,
  pokemonTypeTypographyMap,
  remainingIndicatorTypography,
  type PokemonTypeVariants 
} from '@/lib/theme/components/pokemon/typeLabel';
import type { PokemonType } from '@/types/pokemon';

type PokemonTypeLabelBaseProps = 
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'size'> &
  Pick<PokemonTypeVariants, 'size'>;

type PokemonTypeProps = {
  type: PokemonType;
  count?: never;
};

type PokemonRemainingProps = {
  type: 'remaining';
  count: number;
};

export type PokemonTypeLabelProps =
  PokemonTypeLabelBaseProps &
  (PokemonTypeProps | PokemonRemainingProps);

export const PokemonTypeLabel = React.forwardRef<HTMLSpanElement, PokemonTypeLabelProps>(
  ({ type, count, size = 'md', className, ...props }, ref) => {
    const isRemaining = type === 'remaining';
    const displayText = isRemaining ? `+${count!}` : type;
    const resolvedSize = size ?? 'md';
    
    const typography = isRemaining
      ? remainingIndicatorTypography
      : pokemonTypeTypographyMap[resolvedSize];

    return (
      <span
        ref={ref}
        className={cn(
          pokemonTypeVariants({ size }),
          pokemonTypeClassMap[type],
          typography,
          className
        )}
        {...props}
      >
        {displayText}
      </span>
    );
  }
);

PokemonTypeLabel.displayName = 'PokemonTypeLabel';

