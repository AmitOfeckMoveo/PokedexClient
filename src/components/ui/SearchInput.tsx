import * as React from 'react';
import { type InputProps } from './Input';
import { cn } from '@/lib/utils';
import { inputVariants } from '@/lib/theme/components/input';
import { useSearchInput } from '@/hooks/useSearchInput';

export interface SearchInputProps extends InputProps {
  onSearch?: (value: string) => void;
  debounceMs?: number;
  clearIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  leftIconClassName?: string;
  clearIconClassName?: string;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      onSearch,
      debounceMs = 300,
      clearIcon = '×',
      leftIcon = '🔍',
      value,
      onChange,
      disabled,
      className,
      leftIconClassName,
      clearIconClassName,
      ...props
    },
    ref
  ) => {
    const { displayValue, showClearButton, handleChange, handleClear } = useSearchInput({
      value,
      onChange,
      onSearch,
      debounceMs,
    });

    const inputState = disabled ? 'disabled' : 'default';

    return (
      <div
        className={cn(
          inputVariants({ state: inputState }),
          showClearButton && 'pr-3',
          className
        )}
      >
        {leftIcon && (
          <span className={cn('flex-shrink-0', leftIconClassName)}>
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          value={displayValue}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            'flex-1 bg-transparent border-0 outline-none',
            'placeholder:text-neutral-300',
            'body-regular text-neutral-700',
            'disabled:text-neutral-300',
            'px-0'
          )}
          {...props}
        />

        {showClearButton && (
          <button
            type="button"
            onClick={handleClear}
            className={cn(
              'flex-shrink-0 outline-none cursor-pointer',
              clearIconClassName
            )}
            aria-label="Clear search"
          >
            {clearIcon}
          </button>
        )}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
