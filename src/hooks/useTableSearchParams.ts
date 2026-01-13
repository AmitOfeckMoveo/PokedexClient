import { useState } from 'react';

export interface UseTableSearchParamsOptions {
  defaultSearch?: string;
  defaultSort?: any;
}

export interface UseTableSearchParamsResult<T = any> {
  search: string;
  sort: T | undefined;
  setSearch: (value: string) => void;
  setSort: (value: T) => void;
}

/**
 * Generic hook for managing search/sort UI state
 * Only manages state - no filtering/sorting logic
 */
export function useTableSearchParams<T = any>({
  defaultSearch = '',
  defaultSort,
}: UseTableSearchParamsOptions = {}): UseTableSearchParamsResult<T> {
  const [search, setSearch] = useState(defaultSearch);
  const [sort, setSort] = useState<T | undefined>(defaultSort);

  return {
    search,
    sort,
    setSearch,
    setSort,
  };
}

