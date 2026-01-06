// src/types/pokemon.ts

export type PokemonType =
  | 'Grass'
  | 'Poison'
  | 'Fire'
  | 'Water'
  | 'Bug'
  | 'Flying'
  | 'Normal'
  | 'Electric'
  | 'Ground'
  | 'Fairy'
  | 'Dragon'
  | 'Ice'
  | 'Psychic'
  | 'Rock'
  | 'Steel'
  | 'Dark'
  | 'Fighting'
  | 'Ghost';

/**
 * Base stats of a Pokémon
 */
export interface PokemonBaseStats {
  HP: number;
  Attack: number;
  Defense: number;
  'Sp. Attack': number;
  'Sp. Defense': number;
  Speed: number;
}

/**
 * Pokémon name in multiple languages
 */
export interface PokemonName {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

/**
 * Pokémon evolution data
 */
export interface PokemonEvolution {
  prev?: [string, string];
  next?: Array<[string, string]>;
}

/**
 * Pokémon profile info
 */
export interface PokemonProfile {
  height: string;
  weight: string;
  egg: string[];
  ability: Array<[string, 'true' | 'false']>;
  gender: string;
}

/**
 * Pokémon images
 */
export interface PokemonImage {
  sprite: string;
  thumbnail: string;
  hires: string;
}

/**
 * Main Pokémon type (represents one entry in the JSON)
 */
export interface Pokemon {
  id: number;
  name: PokemonName;
  type: PokemonType[];
  base: PokemonBaseStats;
  species: string;
  description: string;
  evolution?: PokemonEvolution;
  profile: PokemonProfile;
  image: PokemonImage;
}

/**
 * Convenience type
 */
export type PokemonList = Pokemon[];
