import * as React from 'react';

export interface UseTabsProps<T> {
  defaultValue: T;
  items: Array<{ value: T; disabled?: boolean }>;
  onChange?: (value: T) => void;
}

export interface UseTabsReturn<T> {
  activeValue: T;
  handleTabClick: (value: T) => void;
}

/**
 * useTabs - Minimal hook for tabs state and behavior
 * 
 * Responsibilities:
 * - Manages active tab state
 * - Handles tab click with disabled check
 * - Calls onChange callback
 */
export function useTabs<T = string>({
  defaultValue,
  items,
  onChange,
}: UseTabsProps<T>): UseTabsReturn<T> {
  const [activeValue, setActiveValue] = React.useState<T>(defaultValue);

  const handleTabClick = React.useCallback(
    (value: T) => {
      const item = items.find((item) => item.value === value);
      if (item?.disabled) return;

      setActiveValue(value);
      onChange?.(value);
    },
    [items, onChange]
  );

  return {
    activeValue,
    handleTabClick,
  };
}

