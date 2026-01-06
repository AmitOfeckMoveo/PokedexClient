import * as React from 'react';

export interface UseDropdownReturn {
  isOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
  triggerRef: React.RefObject<HTMLButtonElement>;
  handleTriggerClick: () => void;
  handleClose: () => void;
}

/**

 * Responsibilities:
 * - Manages open/close state
 * - Handles click outside detection
 * - Exposes refs for trigger and menu elements
 */
export function useDropdown(disabled = false): UseDropdownReturn {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleTriggerClick = React.useCallback(() => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  }, [disabled]);

  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    dropdownRef,
    triggerRef,
    handleTriggerClick,
    handleClose,
  };
}

