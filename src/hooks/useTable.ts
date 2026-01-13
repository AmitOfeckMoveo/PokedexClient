import { useState, useMemo, useEffect } from 'react';

export interface UseTableOptions<T> {
  data: T[];
  pagination?: {
    enabled: boolean;
    pageSize?: number;
    page?: number; // Controlled mode
    onPageChange?: (page: number) => void; // Controlled mode
  };
}

export interface UseTableResult<T> {
  paginatedData: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  setPage: (page: number) => void;
}

/**
 * useTable - Generic UI hook for managing table pagination state
 * 
 * Handles client-side pagination state and data slicing.
 * Works with any data type - no business logic, pure UI state management.
 * 
 * @example
 * // Uncontrolled pagination
 * const { paginatedData, page, setPage } = useTable({
 *   data: allData,
 *   pagination: { enabled: true, pageSize: 10 }
 * });
 * 
 * // Controlled pagination
 * const { paginatedData } = useTable({
 *   data: allData,
 *   pagination: { enabled: true, pageSize: 10, page: currentPage, onPageChange: setCurrentPage }
 * });
 */
export function useTable<T>({ data, pagination }: UseTableOptions<T>): UseTableResult<T> {
  const isPaginationEnabled = pagination?.enabled ?? false;
  const pageSize = pagination?.pageSize ?? 10;
  const isControlled = pagination?.page !== undefined;
  
  // Internal state for uncontrolled mode
  const [internalPage, setInternalPage] = useState(1);
  
  // Use controlled page if provided, otherwise use internal state
  const page = isControlled ? pagination.page! : internalPage;
  
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  
  // Slice data when pagination is enabled
  const paginatedData = useMemo(() => {
    if (!isPaginationEnabled) {
      return data;
    }
    const startIndex = (page - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, page, pageSize, isPaginationEnabled]);
  
  // Handle page changes
  const setPage = (newPage: number) => {
    if (isControlled) {
      pagination?.onPageChange?.(newPage);
    } else {
      setInternalPage(newPage);
    }
  };
  
  // Reset to page 1 if current page is out of bounds
  useEffect(() => {
    if (isPaginationEnabled && page > totalPages && totalPages > 0) {
      setPage(1);
    }
  }, [page, totalPages, isPaginationEnabled]);
  
  return {
    paginatedData,
    total,
    page,
    pageSize,
    totalPages,
    setPage,
  };
}

