import { useMemo } from 'react';
import type { Pokemon } from '@/types/pokemon';
import type { PokemonFilters } from '@/types/pokemonFilters';
import pokemonData from '@/mocks/pokemon.json';

export interface UsePokemonTableDataResult {
  data: Pokemon[];
  total: number;
  isLoading: boolean;
}

/**
 * usePokemonTableData - Data layer hook for Pokemon table
 * 
 * Extends the pagination PR hook by adding search and sort functionality.
 * This hook is the single source of truth for all data processing.
 * 
 * Data flow: filter → sort → paginate
 * 
 * @example
 * const { data, total, isLoading } = usePokemonTableData({
 *   page: 1,
 *   pageSize: 10,
 *   search: 'char',
 *   sort: 'alphabetically',
 * });
 */
export function usePokemonTableData(
  filters: PokemonFilters
): UsePokemonTableDataResult {
  const { page, pageSize, search, sort } = filters;

  const allPokemon = pokemonData as Pokemon[];

  const filteredData = useMemo(() => {
    if (!search.trim()) {
      return allPokemon;
    }

    const searchLower = search.toLowerCase();
    return allPokemon.filter((pokemon) => {
      return pokemon.name.english.toLowerCase().startsWith(searchLower);
    });
  }, [allPokemon, search]);

  const sortedData = useMemo(() => {
    const sorted = [...filteredData].sort((a, b) => {
      switch (sort) {
        case 'alphabetically':
          return a.name.english.localeCompare(b.name.english);
        case 'hp-level':
          return (b.base?.HP ?? 0) - (a.base?.HP ?? 0); 
        case 'power-level':
          return (b.base?.Attack ?? 0) - (a.base?.Attack ?? 0); 
        default:
          return 0;
      }
    });
    return sorted;
  }, [filteredData, sort]);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, page, pageSize]);

  return {
    data: paginatedData,
    total: sortedData.length, 
    isLoading: false, 
  };
}
