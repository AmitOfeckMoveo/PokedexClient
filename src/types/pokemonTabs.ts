import type { TabItemType } from '@/components/ui/Tabs/Tabs';

export type PokemonTabValue = 'all' | 'mine';

export const POKEMON_TAB_ITEMS: TabItemType<PokemonTabValue>[] = [
  { label: 'All Pokémons', value: 'all' },
  { label: 'My Pokémons', value: 'mine' },
];
