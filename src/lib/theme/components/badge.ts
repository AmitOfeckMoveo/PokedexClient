import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Badge Component Variants
 * Based on Figma specifications:
 * - Border: 0.8px, Always neutral-200
 * - Border radius: 4px
 * - Padding: 4px left/right
 * - Typography: caption-medium (12px, 500 weight, 19px line height)
 * - Background: Flexible via backgroundColor prop
 * - Text Colors: Fully flexible via props
 */
export const badgeVariants = cva(
  cn(
    'inline-flex items-center justify-center',
    'rounded border-badge border-neutral-200',
    'px-1'
  )
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

