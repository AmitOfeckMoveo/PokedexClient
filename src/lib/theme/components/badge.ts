import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Badge Component Variants
 * Based on Figma specifications:
 * - Border: 1px (standard), Always neutral-200
 * - Border radius: 4px
 * - Padding: 4px left/right
 * - Background: Flexible via backgroundColor prop
 * - Typography & Colors: Fully flexible via props
 */
export const badgeVariants = cva(
  cn(
    'inline-flex items-center justify-center',
    'rounded border border-neutral-200',
    'px-1'
  )
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

