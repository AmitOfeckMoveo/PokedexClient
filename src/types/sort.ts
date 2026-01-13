import type { DropdownOption } from './ui';

export type SortOption = 'alphabetically' | 'hp-level' | 'power-level';

export const SORT_OPTIONS: DropdownOption<SortOption>[] = [
  { label: 'Alphabetically', value: 'alphabetically' },
  { label: 'HP level', value: 'hp-level' },
  { label: 'Power level', value: 'power-level' },
];

export function getSortLabel(value: SortOption): string {
  return SORT_OPTIONS.find((option) => option.value === value)?.label || value;
}
