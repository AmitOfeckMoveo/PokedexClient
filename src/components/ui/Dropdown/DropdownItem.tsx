import { Text } from '../Text';
import { dropdownItemVariants } from '@/lib/theme/components/dropdown-item';

/**
 
 * Responsibilities:
 * - Selected state styling
 * - Disabled state handling
 * - Hover/focus styles
 * - Click interaction
 */
interface DropdownItemProps {
  label: string;
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
}

export function DropdownItem({
  label,
  selected,
  disabled,
  onClick,
}: DropdownItemProps) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      disabled={disabled}
      className={dropdownItemVariants({ selected })}
      onClick={onClick}
    >
      <Text typography="body-regular" color="neutral-700" as="span">
        {label}
      </Text>
    </button>
  );
}

DropdownItem.displayName = 'DropdownItem';

