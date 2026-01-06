import * as React from 'react';
import { Text } from '../Text';
import { dropdownItemVariants } from '@/lib/theme/components/dropdown-item';

/**
 * DropdownItem - Internal component
 * Responsible for rendering a single dropdown option
 * 
 * Responsibilities:
 * - Selected state styling
 * - Disabled state handling
 * - Hover/focus styles
 * - Click and keyboard interaction
 */
interface DropdownItemProps {
  label: string;
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export function DropdownItem({
  label,
  selected,
  disabled,
  onClick,
  onKeyDown,
}: DropdownItemProps) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      disabled={disabled}
      className={dropdownItemVariants({ selected })}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <Text typography="body-regular" color="neutral-700" as="span">
        {label}
      </Text>
    </button>
  );
}

DropdownItem.displayName = 'DropdownItem';

