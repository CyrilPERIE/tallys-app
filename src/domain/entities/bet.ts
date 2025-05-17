import { Race } from "./race";
import { Horse } from "./horse";

export type Bet = {
    id: string;
    amount: number;
    date: Date;
    horse: Horse;
    race: Race;
    profit?: number;
    status: "WIN" | "LOSS" | "PENDING";
}