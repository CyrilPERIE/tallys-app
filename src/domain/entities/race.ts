import { Horse } from "@/domain/entities/horse";

export type Race = {
    id: string;
    name: string;
    horses: Horse[];
    date: Date;
    distance: number;
    terrain: string;
    prize: number;
    status: "PENDING" | "RACING" | "FINISHED";
}