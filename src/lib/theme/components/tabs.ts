import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Tab Variant Gap Mapping
 * Maps each tab variant to its corresponding gap token.
 * To add a new variant, simply add it here and to the CVA variants below.
 */
const TAB_VARIANT_GAP_MAP = {
  pills: 'gap-tab-pills-gap',
  underline: 'gap-tab-underline-gap',
} as const;

export type TabVariant = keyof typeof TAB_VARIANT_GAP_MAP;

/**
 * Tab Item Variants
 * Styling for individual tab items
 * - All values from theme tokens
 * - Supports two variants: 'pills' (rounded background) and 'underline' (bottom border)
 */
export const tabItemVariants = cva(
  cn(
    'inline-flex items-center justify-center',
    'body-regular',
    'cursor-pointer transition-colors',
    'focus:outline-none',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ),
  {
    variants: {
      variant: {
        pills: cn(
          'rounded-tab-pills',
          'px-tab-pills-px py-tab-pills-py',
          'h-tab-pills-height',
          'gap-tab-pills-gap'
        ),
        underline: cn(
          'border-b-2 border-transparent',
          'px-tab-underline-px py-tab-underline-py',
          'h-tab-underline-height',
          'gap-tab-underline-gap'
        ),
      },
      active: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Pills variant - active state
      {
        variant: 'pills',
        active: true,
        class: cn(
          'bg-primary-50',
          'text-primary-300'
        ),
      },
      // Pills variant - inactive state
      {
        variant: 'pills',
        active: false,
        class: cn(
          'hover:bg-neutral-100',
          'text-primary-300'
        ),
      },
      // Underline variant - active state
      {
        variant: 'underline',
        active: true,
        class: cn(
          'border-b-black',
          'text-neutral-1000'
        ),
      },
      // Underline variant - inactive state
      {
        variant: 'underline',
        active: false,
        class: cn(
          'hover:text-neutral-500',
          'text-neutral-700'
        ),
      },
    ],
    defaultVariants: {
      variant: 'pills',
      active: false,
    },
  }
);

export type TabItemVariants = VariantProps<typeof tabItemVariants>;

/**
 * Tabs Container Variants
 * Styling for the tabs wrapper container
 * - All values from theme tokens
 * - Easily extensible: add new variant to TAB_VARIANT_GAP_MAP above
 */
export const tabsContainerVariants = cva(
  cn('inline-flex items-center'),
  {
    variants: {
      variant: {
        pills: TAB_VARIANT_GAP_MAP.pills,
        underline: TAB_VARIANT_GAP_MAP.underline,
      },
    },
    defaultVariants: {
      variant: 'pills',
    },
  }
);

export type TabsContainerVariants = VariantProps<typeof tabsContainerVariants>;

