import * as React from 'react';

export interface UseSearchInputProps {
  value?: string | number | readonly string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  debounceMs?: number;
}

export function useSearchInput({
  value,
  onChange,
  onSearch,
  debounceMs = 300,
}: UseSearchInputProps) {
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = React.useState('');
  
  const valueToString = React.useCallback(
    (val: string | number | readonly string[] | undefined): string => {
      if (val === undefined || val === null) return '';
      if (typeof val === 'string') return val;
      if (typeof val === 'number') return String(val);
      if (Array.isArray(val)) return val.join('');
      return '';
    },
    []
  );
  
  const searchValueRef = React.useRef<string>(
    isControlled ? valueToString(value) : uncontrolledValue
  );
  const debounceTimerRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    searchValueRef.current = isControlled ? valueToString(value) : uncontrolledValue;
  }, [value, uncontrolledValue, isControlled, valueToString]);

  React.useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (!isControlled) {
        setUncontrolledValue(newValue);
      }

      searchValueRef.current = newValue;
      onChange?.(e);

      if (onSearch) {
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }
        debounceTimerRef.current = setTimeout(() => {
          onSearch(searchValueRef.current);
        }, debounceMs);
      }
    },
    [isControlled, onChange, onSearch, debounceMs]
  );

  const handleClear = React.useCallback(() => {
    const newValue = '';

    if (!isControlled) {
      setUncontrolledValue(newValue);
    }

    searchValueRef.current = newValue;

    const syntheticEvent = {
      target: { value: newValue },
      currentTarget: { value: newValue },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange?.(syntheticEvent);
    onSearch?.('');
  }, [isControlled, onChange, onSearch]);

  const displayValue = isControlled ? valueToString(value) : uncontrolledValue;
  const showClearButton = displayValue.length > 0;

  return {
    displayValue,
    showClearButton,
    handleChange,
    handleClear,
  };
}
