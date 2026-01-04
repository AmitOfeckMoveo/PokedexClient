import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Tooltip Component Variants
 * Based on Figma specifications:
 * - Border radius: 4px
 * - Padding: Top 5px, Right 10px, Bottom 5px, Left 10px
 * - Gap: 10px (for multiple children)
 * - Background: Flexible via backgroundColor prop
 * - Typography & Colors: Fully flexible via props
 */
export const tooltipVariants = cva(
  'rounded-[4px] inline-block py-[5px] px-[10px] bg-neutrals-1000 text-white max-w-[325px] whitespace-normal text-center relative'
);

export type TooltipVariants = VariantProps<typeof tooltipVariants>;

