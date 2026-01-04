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
  loading?: boolean;
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
    loading,
    type = 'button',
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;
    
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        <span className={buttonContentContainer}>
          {loading && <Spinner size="sm" />}
          {!loading && leftIcon && <span>{leftIcon}</span>}
          {children}
          {!loading && rightIcon && <span>{rightIcon}</span>}
        </span>
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

