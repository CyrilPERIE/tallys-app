import { Bet } from "@/domain/entities/bet";
import { Horse } from "@/domain/entities/horse";
import { Race } from "@/domain/entities/race";

export const Horse1: Horse = {
    id: "1",
    number: "1",
    casaque: "https://www.pmu.fr/back-assets/hippique/casaques/17052025/R4/C1/P1.png",
    name: "Horse 1",
    trainerName: "Trainer 1",
    jockeyName: "Jockey 1",
    age: 1,
    sexe: "MALE",
    position: 1,
    ai_position: 1,
}

export const Horse2: Horse = {
    id: "2",
    number: "2",
    casaque: "https://www.pmu.fr/back-assets/hippique/casaques/17052025/R4/C1/P2.png",
    name: "Horse 2",
    trainerName: "Trainer 2",
    jockeyName: "Jockey 2",
    age: 2,
    sexe: "FEMALE",
    position: 2,
    ai_position: 2,
}

export const Horse3: Horse = {
    id: "3",
    number: "3",
    casaque: "https://www.pmu.fr/back-assets/hippique/casaques/17052025/R4/C1/P3.png",
    name: "Horse 3",
    trainerName: "Trainer 3",
    jockeyName: "Jockey 3",
    age: 3,
    sexe: "HONGRE",
    position: 3,
    ai_position: 3,
}

export const Horse4: Horse = {
    id: "4",
    number: "4",
    casaque: "https://www.pmu.fr/back-assets/hippique/casaques/17052025/R4/C1/P4.png",
    name: "Horse 4",
    trainerName: "Trainer 4",
    jockeyName: "Jockey 4",
    age: 4,
    sexe: "MALE",
    position: 4,
    ai_position: 4,
}

export const Horse5: Horse = {
    id: "5",
    number: "5",
    casaque: "https://www.pmu.fr/back-assets/hippique/casaques/17052025/R4/C1/P5.png",
    name: "Horse 5",
    trainerName: "Trainer 5",
    jockeyName: "Jockey 5",
    age: 5,
    sexe: "FEMALE",
    position: 5,
    ai_position: 5,
}

export const Horse6: Horse = {
    id: "6",
    number: "6",
    casaque: "https://www.pmu.fr/back-assets/hippique/casaques/17052025/R4/C2/P1.png",
    name: "Horse 6",
    trainerName: "Trainer 6",
    jockeyName: "Jockey 6",
    age: 6,
    sexe: "MALE",
    position: 6,
    ai_position: 6,
}

export const HorsesMock: Horse[] = [
    Horse1,
    Horse2,
    Horse3,
    Horse4,
    Horse5,
]


export const Race1: Race = {
    id: "1",
    name: "Race 1",
    date: new Date(2025, 1, 1),
    distance: 1000,
    terrain: "terrain 1",
    prize: 1000,
    status: "PENDING",
    horses: [Horse1, Horse2, Horse3, Horse4, Horse5],
}

export const Race2: Race = {
    id: "2",
    name: "Race 2",
    date: new Date(2025, 1, 1),
    distance: 1000,
    terrain: "terrain 2",
    prize: 2000,
    status: "RACING",
    horses: [Horse1, Horse2, Horse3, Horse4, Horse5],
}

export const Race3: Race = {
    id: "3",
    name: "Race 3",
    date: new Date(2025, 1, 1),
    distance: 1000,
    terrain: "terrain 3",
    prize: 3000,
    status: "FINISHED",
    horses: [Horse1, Horse2, Horse3, Horse4, Horse5],
}

export const Race4: Race = {
    id: "4",
    name: "Race 4",
    date: new Date(2025, 1, 1),
    distance: 1000,
    terrain: "terrain 4",
    prize: 4000,
    status: "FINISHED",
    horses: [Horse1, Horse2, Horse3, Horse4, Horse5],
}

export const RacesMock: Race[] = [
    Race1,
    Race2,
    Race3,
    Race4,
]


export const Bet1: Bet = {
    id: "1",
    horse: Horse1,
    amount: 1,
    status: "PENDING",
    date: new Date(2025, 1, 1),
    race: Race1,
}

export const Bet2: Bet = {
    id: "2",
    horse: Horse2,
    amount: 1,
    status: "WIN",
    date: new Date(2025, 1, 1),
    race: Race2,
    profit: 3.4,
}

export const Bet3: Bet = {
    id: "3",
    horse: Horse3,
    amount: 1,
    status: "LOSS",
    date: new Date(2025, 1, 1),
    race: Race3,
    profit: 0
}

export const Bet4: Bet = {
    id: "4",
    horse: Horse4,
    amount: 1,
    status: "WIN",
    date: new Date(2025, 1, 1),
    race: Race4,
    profit: 3.4,
}

export const BetsMock: Bet[] = [
    Bet1,
    Bet2,
    Bet3,
    Bet4,
]


