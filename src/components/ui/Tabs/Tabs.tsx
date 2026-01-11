import { cn } from '@/lib/utils';
import { TabItem } from './TabItem';


export type TabItemType<T = string> = {
  label: string;
  value: T;
  disabled?: boolean;
};

export interface TabsProps<T = string> {
  items: TabItemType<T>[];
  value: T;
  onChange?: (value: T) => void;
  variant?: 'pills' | 'underline';
  className?: string;
}

export function Tabs<T = string>({
  items,
  value,
  onChange,
  variant = 'pills',
  className,
}: TabsProps<T>) {
  const handleTabClick = (clickedValue: T) => {

    const item = items.find((item) => item.value === clickedValue);
    if (item?.disabled) return;
    
    if (clickedValue !== value) {
      onChange?.(clickedValue);
    }
  };

  const gapClass = variant === 'pills' ? 'gap-tab-pills-gap' : 'gap-tab-underline-gap';

  return (
    <div className={cn('inline-flex items-center', gapClass, className)} role="tablist">
      {items.map((item) => (
        <TabItem
          key={String(item.value)}
          label={item.label}
          active={item.value === value}
          disabled={item.disabled || false}
          onClick={() => handleTabClick(item.value)}
          variant={variant}
        />
      ))}
    </div>
  );
}

Tabs.displayName = 'Tabs';
