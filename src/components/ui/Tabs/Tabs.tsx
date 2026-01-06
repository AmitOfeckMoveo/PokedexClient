import { cn } from '@/lib/utils';
import { TabItem } from './TabItem';
import { useTabs } from '@/hooks/useTabs';
import { tabsContainerVariants, type TabVariant } from '@/lib/theme/components/tabs';

/**
 * Tabs Component Types
 */
export type TabItemType<T = string> = {
  label: string;
  value: T;
  disabled?: boolean;
};

export type { TabVariant };

export interface TabsProps<T = string> {
  items: TabItemType<T>[];
  defaultValue: T;
  onChange?: (value: T) => void;
  variant?: TabVariant;
  className?: string;
}

/**
 * Tabs Component
 * 
 * A simple, uncontrolled tabs component that manages active state internally.
 * Calls onChange when the user selects a different tab.
 */
export function Tabs<T = string>({
  items,
  defaultValue,
  onChange,
  variant = 'pills',
  className,
}: TabsProps<T>) {
  const { activeValue, handleTabClick } = useTabs({
    defaultValue,
    items,
    onChange,
  });

  return (
    <div 
      className={cn(tabsContainerVariants({ variant }), className)} 
      role="tablist"
    >
      {items.map((item, index) => (
        <TabItem
          key={index}
          label={item.label}
          active={item.value === activeValue}
          disabled={item.disabled || false}
          onClick={() => handleTabClick(item.value)}
          variant={variant}
        />
      ))}
    </div>
  );
}

Tabs.displayName = 'Tabs';

