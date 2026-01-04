import * as React from 'react';
import { cn } from '@/lib/utils';
import { Tooltip } from './Tooltip';

export interface TooltipWrapperProps {
  content: React.ReactNode;
  children: React.ReactNode;
  typography?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export const TooltipWrapper = React.forwardRef<HTMLSpanElement, TooltipWrapperProps>(
  ({ content, children, typography, backgroundColor, textColor, className }, ref) => {
    return (
      <span ref={ref} className={cn("relative inline group", className)}>
        {children}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-max max-w-[325px]">
          <Tooltip 
            typography={typography}
            backgroundColor={backgroundColor}
            textColor={textColor}
          >
            {content}
          </Tooltip>
        </div>
      </span>
    );
  }
);
TooltipWrapper.displayName = 'TooltipWrapper';

