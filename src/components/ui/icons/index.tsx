import type { ComponentType, SVGProps } from 'react';

import Calendar from './calendar.svg?react';
import ChevronDown from './chevron-down.svg?react';
import ChevronUp from './chevron-up.svg?react';
import List from './list.svg?react';
import Cards from './cards.svg?react';
import Check from './check.svg?react';
import Search from './search.svg?react';
import X from './x.svg?react';

export const iconRegistry = {
  calendar: Calendar,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  list: List,
  cards: Cards,
  check: Check,
  search: Search,
  x: X,
} as const satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

export type IconName = keyof typeof iconRegistry;
