import { Text } from '../Text';
import { tabItemVariants, type TabItemVariants } from '@/lib/theme/components/tabs';

/**
 * TabItem - Internal component for rendering a single tab
 * 
 * Responsibilities:
 * - Active state styling
 * - Disabled state handling
 * - Hover styles
 * - Click interaction
 */
interface TabItemProps {
  label: string;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
  variant?: TabItemVariants['variant'];
}

export function TabItem({
  label,
  active,
  disabled = false,
  onClick,
  variant = 'pills',
}: TabItemProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      disabled={disabled}
      className={tabItemVariants({ variant, active })}
      onClick={onClick}
    >
      <Text 
        typography="body-regular" 
        color={
          variant === 'pills'
            ? 'primary-300'
            : variant === 'underline' && active
            ? 'neutral-1000'
            : 'neutral-700'
        } 
        as="span"
      >
        {label}
      </Text>
    </button>
  );
}

TabItem.displayName = 'TabItem';

