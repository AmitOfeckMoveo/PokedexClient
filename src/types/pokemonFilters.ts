import type { SortOption } from './sort';
import type { PokemonTabValue } from './pokemonTabs';

export interface PokemonFilters {
  search: string;
  sort: SortOption;
  page: number;
  pageSize: number;
  ownership?: PokemonTabValue;
}
