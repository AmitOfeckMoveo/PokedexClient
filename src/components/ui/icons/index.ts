import * as React from 'react';
import { CalendarIcon } from './CalendarIcon';
import { ChevronDownIcon } from './ChevronDownIcon';
import { ChevronUpIcon } from './ChevronUpIcon';
import { ListIcon } from './ListIcon';
import { CardsIcon } from './CardsIcon';
import { CheckIcon } from './CheckIcon';
import { SearchIcon } from './SearchIcon';
import { XIcon } from './XIcon';

export {
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ListIcon,
  CardsIcon,
  CheckIcon,
  SearchIcon,
  XIcon,
};

export type IconName =
  | 'calendar'
  | 'chevron-down'
  | 'chevron-up'
  | 'list'
  | 'cards'
  | 'check'
  | 'search'
  | 'x';

export const iconRegistry: Record<IconName, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  'calendar': CalendarIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronUpIcon,
  'list': ListIcon,
  'cards': CardsIcon,
  'check': CheckIcon,
  'search': SearchIcon,
  'x': XIcon,
};

