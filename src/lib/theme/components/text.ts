import { cva, type VariantProps } from 'class-variance-authority';

const typographyOptions = [
  'heading-xlarge-bold',
  'heading-xlarge-medium',
  'heading-large-bold',
  'heading-large-medium',
  'heading-large-regular',
  'heading-medium-bold',
  'heading-medium-medium',
  'heading-medium-regular',
  'subheading-bold',
  'subheading-medium',
  'subheading-regular',
  'body-bold',
  'body-medium',
  'body-regular',
  'caption-bold',
  'caption-medium',
  'caption-regular',
  'xsmall-bold',
  'xsmall-medium',
  'xsmall-regular',
] as const;

export type TypographyOption = typeof typographyOptions[number];

const typographyVariants = typographyOptions.reduce((acc, option) => {
  acc[option] = option; 
  return acc;
}, {} as Record<TypographyOption, string>);

/**

 */
export const textVariants = cva('', {
  variants: {
    typography: typographyVariants,
    color: {
      // Primary colors
      'primary-50': 'text-primary-50',
      'primary-100': 'text-primary-100',
      'primary-200': 'text-primary-200',
      'primary-300': 'text-primary-300',
      'primary-400': 'text-primary-400',
      'primary-500': 'text-primary-500',
      // Neutral colors
      'neutral-white': 'text-neutral-white',
      'neutral-100': 'text-neutral-100',
      'neutral-200': 'text-neutral-200',
      'neutral-300': 'text-neutral-300',
      'neutral-400': 'text-neutral-400',
      'neutral-500': 'text-neutral-500',
      'neutral-700': 'text-neutral-700',
      // State colors
      'success-green': 'text-success-green',
      'warning-yellow': 'text-warning-yellow',
      'error-red': 'text-error-red',
      // Extended colors
      'extended-purple': 'text-extended-purple',
      'extended-purple-hover': 'text-extended-purple-hover',
      'extended-lightgreen': 'text-extended-lightgreen',
      'extended-lightgreen-hover': 'text-extended-lightgreen-hover',
      'extended-yellow': 'text-extended-yellow',
      'extended-yellow-hover': 'text-extended-yellow-hover',
      'extended-pink': 'text-extended-pink',
      'extended-pink-hover': 'text-extended-pink-hover',
    },
    truncate: {
      false: '',
      true: 'truncate',
    },
  },
  defaultVariants: {
    typography: 'body-regular',
    color: 'neutral-700',
    truncate: false,
  },
});

export type TextVariants = VariantProps<typeof textVariants>;
