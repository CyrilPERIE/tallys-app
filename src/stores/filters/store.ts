import { createStore } from "zustand";
import { BetStrategy, BetType } from "@prisma/client";
export type PeriodLabel = "1M" | "3M" | "6M" | "YTD" | "1Y" | "MAX";

interface FiltersState {
  periodFilter: PeriodLabel;
  strategyFilter: BetStrategy;
  betTypeFilter: BetType[];
  data: any
  isLoading: boolean
  error: any
}

export type FiltersActions = {
  updatePeriodFilter: (_period: PeriodLabel) => void;
  updateStrategyFilter: (_strategy: BetStrategy) => void;
  updateBetTypeFilter: (_betType: BetType[]) => void;
  updateData: (_data: any) => void;
  updateIsLoading: (_isLoading: boolean) => void;
  updateError: (_error: any) => void;
};

export type FiltersStore = FiltersState & FiltersActions;

export const defaultInitState: FiltersState = {
  periodFilter: "3M",
  strategyFilter: BetStrategy.Foule_v1_0,
  betTypeFilter: Object.values(BetType),
  data: null,
  isLoading: false,
  error: null,
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
    updateBetTypeFilter: (betTypeFilter: BetType[]) =>
      set(() => ({ betTypeFilter })),
    updateData: (data: any) =>
      set(() => ({ data })),
    updateIsLoading: (isLoading: boolean) =>
      set(() => ({ isLoading })),
    updateError: (error: any) =>
      set(() => ({ error })),
  }));
};
