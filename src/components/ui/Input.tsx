import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { inputVariants } from '@/lib/theme/components/input';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClear?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    hasRightIcon, 
    inputWidth, 
    leftIcon, 
    rightIcon, 
    onClear, 
    disabled, 
    ...props 
  }, ref) => {
    const showRightIcon = rightIcon || (onClear && props.value);
    const inputState = disabled ? 'disabled' : 'default';
    
    return (
      <div className={cn(
        inputVariants({ 
          state: inputState,
          inputWidth, 
          hasRightIcon: !!showRightIcon 
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
          className="flex-1 bg-transparent border-0 outline-none placeholder:text-neutral-300 body-regular text-neutral-700 disabled:text-neutral-300 px-0"
          disabled={disabled}
          {...props}
        />
        {showRightIcon && (
          <span className="flex-shrink-0 text-neutral-400 cursor-pointer hover:text-neutral-500">
            {onClear && props.value ? (
              <button
                type="button"
                onClick={onClear}
                className="outline-none"
                aria-label="Clear input"
              >
                {rightIcon || '×'}
              </button>
            ) : (
              rightIcon
            )}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };
