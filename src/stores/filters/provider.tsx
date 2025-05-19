"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
import {
  FiltersStore,
  createFiltersStore,
  initFiltersStore,
} from "@/stores/filters/store";

export const FiltersStoreContext = createContext<StoreApi<FiltersStore> | null>(
  null
);

export interface FiltersStoreProviderProps {
  children: ReactNode;
}

export const FiltersStoreProvider = ({
  children,
}: FiltersStoreProviderProps) => {
  const storeRef = useRef<StoreApi<FiltersStore>>(
    createFiltersStore(initFiltersStore())
  );

  return (
    <FiltersStoreContext.Provider value={storeRef.current}>
      {children}
    </FiltersStoreContext.Provider>
  );
};

export const useFiltersStore = <T,>(selector: (_store: FiltersStore) => T): T => {
  const filtersStoreContext = useContext(FiltersStoreContext);

  if (!filtersStoreContext) {
    throw new Error(`useFiltersStore must be use within filtersStoreProvider`);
  }

  return useStore(filtersStoreContext, selector);
};
