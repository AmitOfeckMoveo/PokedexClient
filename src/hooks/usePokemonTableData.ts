import { useMemo } from 'react';
import type { Pokemon } from '@/types/pokemon';
import pokemonData from '@/mocks/pokemon.json';

export interface UsePokemonTableDataParams {
  search?: string;
  sort?: 'alphabetically' | 'hp-level' | 'power-level';
  ownership?: 'all' | 'mine';
}

export interface UsePokemonTableDataResult {
  data: Pokemon[]; 
  total: number;
  isLoading: boolean;
}


export function usePokemonTableData({
  search,
  sort,
  ownership = 'all',
}: UsePokemonTableDataParams): UsePokemonTableDataResult {
  const allPokemon = pokemonData as Pokemon[];

  
  const ownershipFilteredData = useMemo(() => {
    if (ownership === 'mine') {
      return allPokemon.filter((pokemon) => pokemon.id % 4 === 0);
    }
    return allPokemon;
  }, [allPokemon, ownership]);


  const filteredData = useMemo(() => {
    if (!search?.trim()) {
      return ownershipFilteredData;
    }
    const searchLower = search.toLowerCase();
    return ownershipFilteredData.filter((pokemon) => {
      return pokemon.name.english.toLowerCase().startsWith(searchLower);
    });
  }, [ownershipFilteredData, search]);


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

  return {
    data: sortedData, 
    total: sortedData.length,
    isLoading: false,
  };
}

