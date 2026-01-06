import { cn } from '@/lib/utils';
import { TabItem } from './TabItem';
import { useTabs } from '@/hooks/useTabs';

/**
 * Tab Item Type
 */
export type TabItemType<T = string> = {
  label: string;
  value: T;
  disabled?: boolean;
};

/**
 * Tabs Component Props
 */
export interface TabsProps<T = string> {
  items: TabItemType<T>[];
  defaultValue: T;
  onChange?: (value: T) => void;
  variant?: 'pills' | 'underline';
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

  const gapClass = variant === 'pills' ? 'gap-tab-pills-gap' : 'gap-tab-underline-gap';

  return (
    <div className={cn('inline-flex items-center', gapClass, className)} role="tablist">
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

