import { useMemo } from 'react';
import type { Pokemon } from '@/types/pokemon';
import type { SortOption } from '@/types/sort';
import pokemonData from '@/mocks/pokemon.json';

export interface UsePokemonTableDataParams {
  page: number;
  pageSize: number;
  search?: string;
  sort?: SortOption;
}

export interface UsePokemonTableDataResult {
  data: Pokemon[];
  total: number;
  isLoading: boolean;
}

/**
 * usePokemonTableData - Data layer hook for Pokemon table
 * 
 * This hook abstracts the data source (currently mock data, will be replaced with API calls).
 * It handles pagination logic and prepares the structure for future search/sort implementation.
 * 
 * @example
 * const { data, total, isLoading } = usePokemonTableData({
 *   page: 1,
 *   pageSize: 10,
 * });
 * 
 */
export function usePokemonTableData({
  page,
  pageSize,
  search,
  sort,
}: UsePokemonTableDataParams): UsePokemonTableDataResult {

  const allPokemon = pokemonData as Pokemon[];

  const processedData = allPokemon;

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return processedData.slice(startIndex, startIndex + pageSize);
  }, [processedData, page, pageSize]);

  return {
    data: paginatedData,
    total: processedData.length,
    isLoading: false, 
  };
}

