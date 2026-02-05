import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';


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
      {
        variant: 'pills',
        active: true,
        class: cn(
          'bg-primary-50',
          'text-primary-300'
        ),
      },
      {
        variant: 'pills',
        active: false,
        class: cn(
          'bg-white',
          'text-primary-300',
          'hover:bg-neutral-100'
        ),
      },
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


export const tabsContainerVariants = cva(
  'inline-flex items-center',
  {
    variants: {
      variant: {
        pills: 'gap-tab-pills-gap',
        underline: 'gap-tab-underline-gap',
      },
    },
    defaultVariants: {
      variant: 'pills',
    },
  }
);

export type TabsContainerVariants = VariantProps<typeof tabsContainerVariants>;
