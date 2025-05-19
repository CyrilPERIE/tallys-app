import { createStore } from "zustand";
import { BetStrategy } from "@prisma/client";
export type PeriodLabel = "1M" | "3M" | "6M" | "YTD" | "1Y" | "MAX";

interface FiltersState {
  periodFilter: PeriodLabel;
  strategyFilter: BetStrategy;
}

export type FiltersActions = {
  updatePeriodFilter: (_period: PeriodLabel) => void;
  updateStrategyFilter: (_strategy: BetStrategy) => void;
};

export type FiltersStore = FiltersState & FiltersActions;

export const defaultInitState: FiltersState = {
  periodFilter: "3M",
  strategyFilter: BetStrategy.Foule_v1_0,
};

export const initFiltersStore = (): FiltersState => {
  return { ...defaultInitState };
};

export const createFiltersStore = (
  initState: FiltersState = defaultInitState
) => {
  return createStore<FiltersStore>()((set) => ({
    ...initState,
    periodFilter: "3M",
    updatePeriodFilter: (periodFilter: PeriodLabel) =>
      set(() => ({ periodFilter })),
    updateStrategyFilter: (strategyFilter: BetStrategy) =>
      set(() => ({ strategyFilter })),
  }));
};
