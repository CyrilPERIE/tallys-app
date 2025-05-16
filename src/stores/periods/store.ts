import { createStore } from "zustand";

export type PeriodLabel = "1M" | "3M" | "6M" | "1Y" | "YTD" | "MAX";

interface PeriodState {
  period?: PeriodLabel;
}

export type PeriodActions = {
  updatePeriod: (_period: PeriodLabel) => void;
};

export type PeriodStore = PeriodState & PeriodActions;

export const defaultInitState: PeriodState = {
  period: "3M",
};

export const initPeriodStore = (): PeriodState => {
  return { ...defaultInitState };
};

export const createPeriodStore = (
  initState: PeriodState = defaultInitState
) => {
  return createStore<PeriodStore>()((set) => ({
    ...initState,
    period: "3M",
    updatePeriod: (period: PeriodLabel) => set(() => ({ period })),
  }));
};
