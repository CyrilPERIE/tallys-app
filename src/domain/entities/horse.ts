export type Horse = {
    id: string;
    number: string;
    casque: string;
    name: string;
    trainerName: string;
    jockeyName: string;
    age: number;
    sexe: "MALE" | "FEMALE" | "HONGRE";
    position?: number;
    ai_position?: number;
}
