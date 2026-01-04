import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Badge Component Variants
 * Based on Figma specifications:
 * - Border: 0.8px, Always neutral-200
 * - Border radius: 4px
 * - Padding: 4px left/right
 * - Background: Flexible via backgroundColor prop
 * - Typography & Colors: Fully flexible via props
 */
export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded border-[0.8px] border-neutral-200 px-1',
  {
    variants: {},
    defaultVariants: {},
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

