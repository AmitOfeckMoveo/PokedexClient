import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { inputVariants } from '@/lib/theme/components/input';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    disabled, 
    ...props 
  }, ref) => {
    const inputState = disabled ? 'disabled' : 'default';
    
    return (
      <div className={cn(
        inputVariants({ 
          state: inputState
        }),
        className
      )}>
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
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };
