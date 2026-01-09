import type { SortOption } from './sort';

export interface PokemonFilters {
  search: string;
  sort: SortOption;
  page: number;
  pageSize: number;
}
