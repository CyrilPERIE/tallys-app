import { _MONTH_MAP } from "@/lib/constants/constants";

export const dateToDisplay = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day} ${getMonthLabel(month.toString())} ${year}`;
  };
  
  export const getMonthLabel = (month: string) => {
    if (month.length === 1) {
      return _MONTH_MAP[`0${month}` as keyof typeof _MONTH_MAP];
    }
    return _MONTH_MAP[month as keyof typeof _MONTH_MAP];
  };
  
  export const amountToDisplay = (amount: number, currency: string = "€") => {
    return `${amount > 0 ? "+" : ""}${amount.toFixed(2)}${currency}`.replace(
      ".",
      ","
    );
  };