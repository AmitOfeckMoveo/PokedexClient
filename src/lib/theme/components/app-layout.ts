import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * App Layout Component Variants
 * Styling for the main application layout container
 */
export const appLayoutVariants = cva(
  cn(
    'min-h-screen',
    'bg-background text-foreground'
  )
);

export type AppLayoutVariants = VariantProps<typeof appLayoutVariants>;

/**
 * Page Container Variants
 * Container for the page content area (below header)
 */
export const pageContainerVariants = cva(
  cn(
    'bg-neutral-50',
    'min-h-[calc(100vh-79px)]'
  )
);

export type PageContainerVariants = VariantProps<typeof pageContainerVariants>;

/**
 * Content Wrapper Variants
 * Wrapper for the main content with responsive max-width and padding
 */
export const contentWrapperVariants = cva(
  cn(
    'w-full',
    'max-w-page-container',
    'mx-auto',
    'px-page-container-px-mobile sm:px-page-container-px-sm md:px-page-container-px-md lg:px-page-container-px-lg',
    'py-page-container-py-mobile sm:py-page-container-py'
  )
);

export type ContentWrapperVariants = VariantProps<typeof contentWrapperVariants>;

