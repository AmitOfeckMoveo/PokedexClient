/**
 * Sort Types and Constants
 * 
 * Defines the available sorting options for the Pokemon table.
 * Ready for future implementation of sorting logic.
 */

export type SortOption = 'alphabetically' | 'hp-level' | 'power-level';

export const SORT_OPTIONS: Array<{ label: string; value: SortOption }> = [
  { label: 'Alphabetically', value: 'alphabetically' },
  { label: 'HP level', value: 'hp-level' },
  { label: 'Power level', value: 'power-level' },
];

/**
 * Helper function to get sort option label by value
 */
export function getSortLabel(value: SortOption): string {
  return SORT_OPTIONS.find((option) => option.value === value)?.label || value;
}
