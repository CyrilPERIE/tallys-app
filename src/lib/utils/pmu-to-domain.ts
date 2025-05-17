import { Bet } from "@/domain/entities/bet";

type CourseIdToDomainType = {
    date: string;
    race: string;
    course: string;
}

export const courseIdToDomain = (courseId: string): CourseIdToDomainType => {
    const date = courseId.slice(0, 8);
    const race = courseId.slice(8, 10);
    const course = courseId.slice(10, 12);
    return {
        date: datePmuToDomain(date),
        race: race,
        course: course
    };
}
const _MONTH_MAP = {
    "01": "Jan.",
    "02": "Fév.",
    "03": "Mar.",
    "04": "Avr.",
    "05": "Mai.",
    "06": "Juin.",
    "07": "Juil.",
    "08": "Aoû.",
    "09": "Sep.",
    "10": "Oct.",
    "11": "Nov.",
    "12": "Déc.",
}

export const computeProfit = (bet: Bet) => {
    const { amount, profit } = bet
    return profit || profit === 0 ? profit - amount : 0
}

export const datePmuToDomain = (date: string) => {
    const day = date.slice(0, 2);
    const month = date.slice(2, 4);
    const year = date.slice(4, 8);
    return `${day} ${_MONTH_MAP[month as keyof typeof _MONTH_MAP]} ${year}`;
}

export const dateToDomain = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day} ${getMonthLabel(month.toString())} ${year}`;
}

export const getMonthLabel = (month: string) => {
    if (month.length === 1) {
        return _MONTH_MAP[`0${month}` as keyof typeof _MONTH_MAP];
    }
    return _MONTH_MAP[month as keyof typeof _MONTH_MAP];
}

export const amountToDisplay = (amount: number, currency: string = "€") => {
    return `${amount > 0 ? "+" : ""}${amount.toFixed(2)}${currency}`.replace(".", ",");
}
