import { useState } from 'react';
import { cn } from '@/lib/utils';
import { PokedexHeader } from './components/layout/PokedexHeader';
import { PokemonTablePage } from './components/pokemon/PokemonTablePage';
import type { PokemonTabValue } from '@/types/pokemonTabs';
import {
  appLayoutVariants,
  pageContainerVariants,
  contentWrapperVariants,
} from '@/lib/theme/components/app-layout';

function App() {
  const [activeTab, setActiveTab] = useState<PokemonTabValue>('all');

  return (
    <div className={cn(appLayoutVariants())}>
      <PokedexHeader 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      <div className={cn(pageContainerVariants())}>
        <div className={cn(contentWrapperVariants())}>
          <PokemonTablePage activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default App
