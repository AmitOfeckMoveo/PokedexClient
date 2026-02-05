import { Text } from '../Text';
import { tabItemVariants, type TabItemVariants } from '@/lib/theme/components/tabs';

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
        as="span"
        className="text-inherit"
      >
        {label}
      </Text>
    </button>
  );
}

TabItem.displayName = 'TabItem';

