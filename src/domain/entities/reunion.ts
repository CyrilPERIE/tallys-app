import { Race } from "@/domain/entities/race";

export type Reunion = {
    id: string;
    number: string;
    location: string;
    races: Race[];
    date: Date;
    status: "PENDING" | "RACING" | "FINISHED";
}