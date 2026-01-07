import { cn } from '@/lib/utils';
import { Text } from '../Text';
import { Icon, type IconName } from '../Icon';
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
  value?: T | null;
  options: DropdownOption<T>[];
  onChange: (value: T) => void;
  disabled?: boolean;
  className?: string;
  icon?: IconName;
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
  icon,
}: DropdownProps<T>) {
  const {
    isOpen,
    dropdownRef,
    triggerRef,
    handleTriggerClick,
    handleClose,
  } = useDropdown(disabled);

  const selectedOption = value != null ? options.find((option) => option.value === value) : null;
  const finalDisplayLabel = selectedOption?.label || label;

  const handleOptionClick = (optionValue: T) => {
    const option = options.find((opt) => opt.value === optionValue);
    if (option?.disabled) return;
    onChange(optionValue);
    handleClose();
  };

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
        <Text typography="body-regular" color="neutrals-400" as="span">
          {finalDisplayLabel}
        </Text>
        {icon && (
          <Icon
            name={icon}
            className={cn(
              'w-icon-size-dropdown h-icon-size-dropdown text-neutrals-400 transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        )}
      </button>

      {/* Dropdown Menu - Positioned relative to trigger */}
      {isOpen && (
        <DropdownMenu ariaLabel={label} menuRef={dropdownRef}>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              label={option.label}
              selected={value != null && option.value === value}
              disabled={option.disabled || false}
              onClick={() => handleOptionClick(option.value)}
            />
          ))}
        </DropdownMenu>
      )}
    </div>
  );
}

Dropdown.displayName = 'Dropdown';

