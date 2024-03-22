'use client';

import { createContext, useContext, useState } from 'react';

import { FiltersProps, ContextProps as Props } from '@/types/props';

interface FiltersContextProps {
  filters: FiltersProps;
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
}

const FiltersContext = createContext<FiltersContextProps | undefined>(
  undefined
);

export function useFilters() {
  const context = useContext(FiltersContext);
  if (!context)
    throw new Error('useFilters must be used within a FiltersProvider');
  return context;
}

export function FiltersProvider({ children }: Props) {
  const [filters, setFilters] = useState<FiltersProps>({
    category: 'DEFAULT',
    application: 'DEFAULT',
    date: {
      startDate: null,
      endDate: null
    }
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
