import * as React from 'react';
import { dropdownMenuVariants } from '@/lib/theme/components/dropdown-menu';

/**

 * Responsibilities:
 * - Positioning (absolute, relative to trigger)
 * - Width matching trigger
 * - Background, border, shadow styling
 * - Z-index management
 * - No state, no logic - pure presentation
 */
interface DropdownMenuProps {
  children: React.ReactNode;
  ariaLabel: string;
  menuRef: React.RefObject<HTMLDivElement>;
}

export function DropdownMenu({
  children,
  ariaLabel,
  menuRef,
}: DropdownMenuProps) {
  return (
    <div
      ref={menuRef}
      className={dropdownMenuVariants()}
      role="listbox"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

DropdownMenu.displayName = 'DropdownMenu';

