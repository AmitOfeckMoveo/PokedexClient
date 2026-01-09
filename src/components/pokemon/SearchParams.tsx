import { cn } from '@/lib/utils';
import { Input } from '../ui/Input';
import { Icon } from '../ui/Icon';
import { SortDropdown } from './SortDropdown';
import type { SortOption } from '@/types/sort';
import {
  searchParamsVariants,
  searchParamsSearchContainerVariants,
  searchParamsIconContainerVariants,
} from '@/lib/theme/components/search-params';

export interface SearchParamsProps {
  search: string;
  onSearchChange: (value: string) => void;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
}

export function SearchParams({
  search,
  onSearchChange,
  sort,
  onSortChange,
}: SearchParamsProps) {
  return (
    <div className={cn(searchParamsVariants())}>
      <div className={cn(searchParamsSearchContainerVariants())}>
        <div className={cn(searchParamsIconContainerVariants())}>
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
          className="w-full [&>input]:pl-search-params-input-padding-left [&>input]:group-hover:text-white [&>input]:group-hover:placeholder:text-neutral-400"
          // need to control using variants, after mvp
        />
      </div>

      <SortDropdown value={sort} onChange={onSortChange} />
    </div>
  );
}

