import { cn } from '@/lib/utils';
import { Text } from '../Text';
import { DropdownMenu } from './DropdownMenu';
import { DropdownItem } from './DropdownItem';
import { useDropdown } from '@/hooks/useDropdown';
import { dropdownTriggerVariants } from '@/lib/theme/components/dropdown-trigger';

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
      <button
        ref={triggerRef}
        className={dropdownTriggerVariants()}
        onClick={handleTriggerClick}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        type="button"
      >
        <Text typography="body-regular" color="neutral-700" as="span">
          {finalDisplayLabel}
        </Text>
      </button>

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

