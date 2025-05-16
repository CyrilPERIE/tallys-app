"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
import {
  PeriodStore,
  createPeriodStore,
  initPeriodStore,
} from "@/stores/periods/store";

export const PeriodStoreContext = createContext<StoreApi<PeriodStore> | null>(
  null
);

export interface PeriodStoreProviderProps {
  children: ReactNode;
}

export const PeriodStoreProvider = ({ children }: PeriodStoreProviderProps) => {
  const storeRef = useRef<StoreApi<PeriodStore>>(
    createPeriodStore(initPeriodStore())
  );

  return (
    <PeriodStoreContext.Provider value={storeRef.current}>
      {children}
    </PeriodStoreContext.Provider>
  );
};

export const usePeriodStore = <T,>(selector: (_store: PeriodStore) => T): T => {
  const periodStoreContext = useContext(PeriodStoreContext);

  if (!periodStoreContext) {
    throw new Error(`usePeriodStore must be use within periodStoreProvider`);
  }

  return useStore(periodStoreContext, selector);
};
