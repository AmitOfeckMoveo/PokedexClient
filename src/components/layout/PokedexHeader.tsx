import { cn } from '@/lib/utils';
import { Tabs } from '../ui/Tabs/Tabs';
import pokemonLogo from '@/assets/images/pokemon-logo.svg';
import {
  pokedexHeaderVariants,
  pokedexHeaderContentVariants,
  pokedexHeaderLogoVariants,
} from '@/lib/theme/components/pokedex-header';
import { POKEMON_TAB_ITEMS, type PokemonTabValue } from '@/types/pokemonTabs';

export interface PokedexHeaderProps {
  activeTab: PokemonTabValue;
  onTabChange: (value: PokemonTabValue) => void;
}

export function PokedexHeader({ activeTab, onTabChange }: PokedexHeaderProps) {

  return (
    <header className={cn(pokedexHeaderVariants())}>
      <div className={cn(pokedexHeaderContentVariants())}>

        <img 
          src={pokemonLogo} 
          alt="Pokémon Logo" 
          className={cn(pokedexHeaderLogoVariants())}
        />

        <Tabs
          items={POKEMON_TAB_ITEMS}
          value={activeTab}
          onChange={onTabChange}
          variant="pills"
        />
      </div>
    </header>
  );
}

