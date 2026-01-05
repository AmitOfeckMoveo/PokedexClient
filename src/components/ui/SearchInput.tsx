import * as React from 'react';
import { Input, type InputProps } from './Input';
import { cn } from '@/lib/utils';

export interface SearchInputProps extends Omit<InputProps, 'rightIcon'> {
  onSearch?: (value: string) => void;
  debounceMs?: number;
  clearIcon?: React.ReactNode;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ 
    onSearch,
    debounceMs = 300,
    clearIcon = '×',
    value,
    onChange,
    leftIcon = '🔍',
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value || '');
    const debounceTimerRef = React.useRef<NodeJS.Timeout>();

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
      <Input
        ref={ref}
        value={internalValue}
        onChange={handleChange}
        leftIcon={leftIcon}
        rightIcon={
          showClearButton ? (
            <button
              type="button"
              onClick={handleClear}
              className={cn(
                'outline-none cursor-pointer',
                'hover:text-neutral-500'
              )}
              aria-label="Clear search"
            >
              {clearIcon}
            </button>
          ) : undefined
        }
        {...props}
      />
    );
  }
);
SearchInput.displayName = 'SearchInput';

export { SearchInput };

