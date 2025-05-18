import { Race } from "@/domain/entities/race";
import { Horse } from "@/domain/entities/horse";

export type Bet = {
    id: string;
    amount: number;
    date: Date;
    horse: Horse;
    race: Race;
    profit?: number;
    status: "WIN" | "LOSS" | "PENDING";
}