import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { inputVariants } from '@/lib/theme/components/input';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    hasRightIcon, 
    inputWidth, 
    leftIcon, 
    rightIcon, 
    disabled, 
    ...props 
  }, ref) => {
    const inputState = disabled ? 'disabled' : 'default';
    const computedHasRightIcon = hasRightIcon !== undefined ? hasRightIcon : !!rightIcon;
    
    return (
      <div className={cn(
        inputVariants({ 
          state: inputState,
          inputWidth, 
          hasRightIcon: computedHasRightIcon
        }),
        className
      )}>
        {leftIcon && (
          <span className="flex-shrink-0 text-neutral-400">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          className={cn(
            'flex-1 bg-transparent border-0 outline-none',
            'placeholder:text-neutral-300',
            'body-regular text-neutral-700',
            'disabled:text-neutral-300',
            'px-0'
          )}
          disabled={disabled}
          {...props}
        />
        {rightIcon && (
          <span className="flex-shrink-0 text-neutral-400">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };
