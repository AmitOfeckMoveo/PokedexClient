import * as React from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, type TooltipProps } from './Tooltip';

export interface TooltipWrapperProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  tooltipProps?: Omit<TooltipProps, 'children'>;
}

/**
 * TooltipWrapper - Behavior component
 * Handles hover, positioning, and responsiveness.
 * Pure composition - no tooltip styling logic.
 */
export const TooltipWrapper = React.forwardRef<HTMLSpanElement, TooltipWrapperProps>(
  ({ content, children, tooltipProps, className }, ref) => {
    return (
      <span ref={ref} className={cn("relative inline group", className)}>
        {children}
        <div
          className={cn(
            "absolute bottom-full left-1/2 -translate-x-1/2",
            "mb-tooltip-gap",
            "opacity-0 group-hover:opacity-100 transition-opacity",
            "pointer-events-none z-10",
            "w-max overflow-visible"
          )}
        >
          <Tooltip {...tooltipProps}>
            {content}
          </Tooltip>
        </div>
      </span>
    );
  }
);
TooltipWrapper.displayName = 'TooltipWrapper';
