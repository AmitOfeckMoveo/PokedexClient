import * as React from 'react';
import { Input, type InputProps } from './Input';
import { Text } from './Text';
import { cn } from '@/lib/utils';

export interface FormInputProps extends InputProps {
  label?: string;
  error?: string;
  helpText?: string;
  required?: boolean;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ 
    label,
    error,
    helpText,
    required,
    className,
    id,
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;
    
    return (
      <div className={cn('space-y-1', className)}>
        {label && (
          <label 
            htmlFor={inputId}
            className="body-regular text-neutral-700"
          >
            {label}
            {required && <span className="text-error-red ml-1">*</span>}
          </label>
        )}
        <Input
          ref={ref}
          id={inputId}
          className={cn(
            hasError && 'border-error-red focus:border-error-red'
          )}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined
          }
          {...props}
        />
        {error && (
          <Text 
            id={`${inputId}-error`}
            typography="caption-regular" 
            color="text-error-red"
            as="span"
          >
            {error}
          </Text>
        )}
        {helpText && !error && (
          <Text 
            id={`${inputId}-help`}
            typography="caption-regular" 
            color="text-neutral-300"
            as="span"
          >
            {helpText}
          </Text>
        )}
      </div>
    );
  }
);
FormInput.displayName = 'FormInput';

export { FormInput };

