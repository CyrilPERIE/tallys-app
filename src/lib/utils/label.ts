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

export const courseIdToDisplay = (courseId: string) => {
  const date = courseId.slice(0, 8);
  const race = courseId.slice(8, 10);
  const course = courseId.slice(10, 12);
  return {
    date: datePmuToDisplay(date),
    race: race,
    course: course,
  };
};

export const datePmuToDisplay = (date: string) => {
  const day = date.slice(0, 2);
  const month = date.slice(2, 4);
  const year = date.slice(4, 8);
  return `${day} ${_MONTH_MAP[month as keyof typeof _MONTH_MAP]} ${year}`;
};
