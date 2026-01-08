import { cn } from '@/lib/utils';
import { Text } from '../ui/Text';
import { Icon } from '../ui/Icon';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '../ui/pagination';

export interface TablePaginationProps {
  page: number; 
  pageSize: number; 
  total: number; 
  onPageChange: (page: number) => void;
}


export function TablePagination({
  page,
  pageSize,
  total,
  onPageChange,
}: TablePaginationProps) {

  const totalPages = Math.ceil(total / pageSize);
  const startItem = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, total);

  const isFirstPage = page === 1;
  const isLastPage = page >= totalPages || totalPages === 0;

  const handlePrevious = () => {
    if (!isFirstPage) {
      onPageChange(page - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      onPageChange(page + 1);
    }
  };

  return (
    <div
      className={cn(
        'h-[44px]',
        'flex items-center justify-between',
        'px-[10px]',
        'bg-white',
        'border-t border-neutral-100'
      )}
    >
      <Pagination>
        <PaginationContent className="w-full justify-between">
          {/* Left side: Rows per page */}
          <PaginationItem>
            <Text typography="caption-regular" color="neutral-600" as="span">
              Rows per page: {pageSize}
            </Text>
          </PaginationItem>

          {/* Right side: Range text + arrows */}
          <div className="flex items-center gap-2">
            <PaginationItem>
              <Text typography="caption-regular" color="neutral-600" as="span">
                {startItem}–{endItem} of {total} items
              </Text>
            </PaginationItem>

            <PaginationItem>
              <button
                type="button"
                onClick={handlePrevious}
                disabled={isFirstPage}
                className={cn(
                  'inline-flex items-center justify-center',
                  'h-auto w-auto p-0',
                  'transition-colors',
                  'hover:opacity-70',
                  'focus-visible:outline-none',
                  'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed'
                )}
                aria-label="Go to previous page"
                aria-disabled={isFirstPage}
              >
                <Icon name="chevron-left" size="sm" className="text-neutral-600" />
              </button>
            </PaginationItem>

            <PaginationItem>
              <button
                type="button"
                onClick={handleNext}
                disabled={isLastPage}
                className={cn(
                  'inline-flex items-center justify-center',
                  'h-auto w-auto p-0',
                  'transition-colors',
                  'hover:opacity-70',
                  'focus-visible:outline-none',
                  'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed'
                )}
                aria-label="Go to next page"
                aria-disabled={isLastPage}
              >
                <Icon name="chevron-right" size="sm" className="text-neutral-600" />
              </button>
            </PaginationItem>
          </div>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

