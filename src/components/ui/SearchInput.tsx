import * as React from 'react';
import { type InputProps } from './Input';
import { cn } from '@/lib/utils';
import { inputVariants } from '@/lib/theme/components/input';

export interface SearchInputProps extends InputProps {
  onSearch?: (value: string) => void;
  debounceMs?: number;
  clearIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ 
    onSearch,
    debounceMs = 300,
    clearIcon = '×',
    value,
    onChange,
    leftIcon = '🔍',
    className,
    disabled,
    inputWidth,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value || '');
    const debounceTimerRef = React.useRef<NodeJS.Timeout>();
    const inputState = disabled ? 'disabled' : 'default';

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      
      onChange?.(e);
      
      // Debounce search callback
      if (onSearch) {
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }
        debounceTimerRef.current = setTimeout(() => {
          onSearch(newValue);
        }, debounceMs);
      }
    };

    const handleClear = () => {
      setInternalValue('');
      const syntheticEvent = {
        target: { value: '' },
        currentTarget: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(syntheticEvent);
      onSearch?.('');
    };

    const showClearButton = internalValue != null && internalValue !== '';

    return (
      <div className={cn(
        inputVariants({ 
          state: inputState,
          inputWidth
        }),
        showClearButton && 'pr-3',
        className
      )}>
        {leftIcon && (
          <span className="flex-shrink-0 text-neutral-400">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          value={internalValue}
          onChange={handleChange}
          className={cn(
            'flex-1 bg-transparent border-0 outline-none',
            'placeholder:text-neutral-300',
            'body-regular text-neutral-700',
            'disabled:text-neutral-300',
            'px-0'
          )}
          disabled={disabled}
          {...props}
        />
        {showClearButton && (
          <button
            type="button"
            onClick={handleClear}
            className={cn(
              'flex-shrink-0 text-neutral-400',
              'outline-none cursor-pointer',
              'hover:text-neutral-500'
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

export { SearchInput };
