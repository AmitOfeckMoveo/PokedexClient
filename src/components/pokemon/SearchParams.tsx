import { cn } from '@/lib/utils';
import { Input } from '../ui/Input';
import { Icon } from '../ui/Icon';
import { SortDropdown } from './SortDropdown';
import type { SortOption } from '@/types/sort';

export interface SearchParamsProps {
  search: string;
  onSearchChange: (value: string) => void;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
}

/**
 * SearchParams - Controlled UI component for search and sort
 * 
 * Displays a horizontal bar with search input on the left and sort dropdown on the right.
 * Fully controlled component - no internal state.
 * 
 * @example
 * <SearchParams
 *   search={search}
 *   onSearchChange={setSearch}
 *   sort={sort}
 *   onSortChange={setSort}
 * />
 */
export function SearchParams({
  search,
  onSearchChange,
  sort,
  onSortChange,
}: SearchParamsProps) {
  return (
    <div className={cn(
      'h-[38px]',
      'flex items-center justify-between',
      'w-full gap-4'
    )}>
      {/* Search Input - Left aligned */}
      <div className="flex-1 max-w-md relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10 flex items-center">
          <Icon 
            name="search" 
            size="sm" 
            className="text-neutral-600 group-hover:text-white transition-colors" 
          />
        </div>
        <Input
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full [&>input]:pl-9 [&>input]:group-hover:text-white [&>input]:group-hover:placeholder:text-neutral-400"
        />
      </div>

      {/* Sort Dropdown - Right aligned */}
      <SortDropdown value={sort} onChange={onSortChange} />
    </div>
  );
}

