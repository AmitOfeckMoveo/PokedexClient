import * as React from 'react';
import type { DropdownOption } from '@/components/ui/Dropdown/Dropdown';

export interface UseDropdownProps<T> {
  value: T;
  options: DropdownOption<T>[];
  onChange: (value: T) => void;
  disabled?: boolean;
}

export interface UseDropdownReturn<T> {
  isOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
  triggerRef: React.RefObject<HTMLButtonElement>;
  displayLabel: string;
  handleTriggerClick: () => void;
  handleOptionClick: (optionValue: T) => void;
  handleItemKeyDown: (optionValue: T) => (e: React.KeyboardEvent) => void;
}

/**
 * useDropdown - Custom hook for dropdown state and behavior
 * 
 * Responsibilities:
 * - Manages open/close state
 * - Handles click outside detection
 * - Handles keyboard navigation (Escape)
 * - Calculates display label
 * - Provides event handlers
 */
export function useDropdown<T = string>({
  value,
  options,
  onChange,
  disabled = false,
}: UseDropdownProps<T>): UseDropdownReturn<T> {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  // Find the selected option to display its label
  const selectedOption = options.find((option) => option.value === value);
  const displayLabel = selectedOption?.label || '';

  // Close dropdown when clicking outside
  React.useEffect(() => {
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

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  const handleOptionClick = React.useCallback(
    (optionValue: T) => {
      if (options.find((opt) => opt.value === optionValue)?.disabled) {
        return;
      }
      onChange(optionValue);
      setIsOpen(false);
      triggerRef.current?.focus();
    },
    [options, onChange]
  );

  const handleTriggerClick = React.useCallback(() => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  }, [disabled, isOpen]);

  const handleItemKeyDown = React.useCallback(
    (optionValue: T) => (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOptionClick(optionValue);
      }
    },
    [handleOptionClick]
  );

  return {
    isOpen,
    dropdownRef,
    triggerRef,
    displayLabel,
    handleTriggerClick,
    handleOptionClick,
    handleItemKeyDown,
  };
}

