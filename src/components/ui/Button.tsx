import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants, buttonContentContainer } from '@/lib/theme/components/button';
import { Spinner } from './Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    leftIcon, 
    rightIcon, 
    children,
    disabled,
    isLoading,
    type = 'button',
    ...props 
  }, ref) => {
    const isDisabled = disabled || isLoading;
    
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        <span className={buttonContentContainer}>
          {isLoading && <Spinner size="sm" />}
          {!isLoading && leftIcon && <span>{leftIcon}</span>}
          {children}
          {!isLoading && rightIcon && <span>{rightIcon}</span>}
        </span>
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

