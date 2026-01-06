import { cn } from '@/lib/utils';
import { Button } from '../Button';
import { Text } from '../Text';
import { DropdownMenu } from './DropdownMenu';
import { DropdownItem } from './DropdownItem';
import { useDropdown } from '@/hooks/useDropdown';

/**
 * Dropdown Component Types
 */
export type DropdownOption<T = string> = {
  label: string;
  value: T;
  disabled?: boolean;
};

export interface DropdownProps<T = string> {
  label: string;
  value: T;
  options: DropdownOption<T>[];
  onChange: (value: T) => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Dropdown - Generic, reusable dropdown component
 * 
 * Responsibilities:
 * - Composes DropdownMenu and DropdownItem
 * - Renders UI using hook logic
 * 
 * Features:
 * - Controlled component (receives value, calls onChange)
 * - No business logic or domain concepts
 * - Composed of Button and Text components
 * - Uses theme tokens exclusively
 * - Handles open/close state internally
 * - Click outside to close
 * - Keyboard navigation support
 */
export function Dropdown<T = string>({
  label,
  value,
  options,
  onChange,
  disabled = false,
  className,
}: DropdownProps<T>) {
  const {
    isOpen,
    dropdownRef,
    triggerRef,
    displayLabel,
    handleTriggerClick,
    handleOptionClick,
    handleItemKeyDown,
  } = useDropdown({
    value,
    options,
    onChange,
    disabled,
  });

  // Use label as fallback if no option is selected
  const finalDisplayLabel = displayLabel || label;

  return (
    <div className={cn('relative inline-block overflow-visible', className)}>
      {/* Trigger Button */}
      <Button
        ref={triggerRef}
        variant="secondary"
        size="medium"
        onClick={handleTriggerClick}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Text typography="body-regular" color="neutral-700" as="span">
          {finalDisplayLabel}
        </Text>
      </Button>

      {/* Dropdown Menu - Positioned relative to trigger */}
      {isOpen && (
        <DropdownMenu ariaLabel={label} menuRef={dropdownRef}>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              label={option.label}
              selected={option.value === value}
              disabled={option.disabled || false}
              onClick={() => handleOptionClick(option.value)}
              onKeyDown={handleItemKeyDown(option.value)}
            />
          ))}
        </DropdownMenu>
      )}
    </div>
  );
}

Dropdown.displayName = 'Dropdown';

