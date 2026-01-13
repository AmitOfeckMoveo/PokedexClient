import { cn } from '@/lib/utils';
import { Text } from '../ui/Text';
import { Icon } from '../ui/Icon';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../ui/dropdown-menu';
import { sortDropdownTriggerVariants } from '@/lib/theme/components/sort-dropdown';
import { SORT_OPTIONS, type SortOption } from '@/types/sort';

export interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}


export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(sortDropdownTriggerVariants(), 'group')}
        aria-label="Sort by"
      >
        <Text 
          typography="body-regular" 
          color="neutral-800" 
          as="span"
        >
          Sort By
        </Text>
        <Icon 
          name="chevron-up" 
          size="sm" 
          className="text-neutral-600" 
        />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="start" className="min-w-[200px]">
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onChange(option.value)}
            className="cursor-pointer"
          >
            <Text typography="body-regular" color="neutral-700" as="span">
              {option.label}
            </Text>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

