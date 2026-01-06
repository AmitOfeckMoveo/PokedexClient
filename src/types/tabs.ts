import type { TabItemType } from '@/components/ui/Tabs/Tabs';

/**
 * Tab value types
 */
export type PokemonTabValue = 'all' | 'mine';
export type ViewTabValue = 'list' | 'card';

/**
 * Tab items arrays
 */
export const POKEMON_TABS: Array<TabItemType<PokemonTabValue>> = [
  { label: 'All Pokémons', value: 'all' },
  { label: 'My Pokémons', value: 'mine' },
];

export const VIEW_TABS: Array<TabItemType<ViewTabValue>> = [
  { label: 'List', value: 'list' },
  { label: 'Card', value: 'card' },
];

