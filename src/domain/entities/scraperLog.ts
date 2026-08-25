export interface ScraperLog {
    id: string;
    start_time: Date;
    end_time?: Date;
    duration?: number;   
    status: ScraperLogStatus;
    scraper: string;
}

export enum ScraperLogStatus {
    COMPLETED = "Terminé",
    FAILED = "Échec",
    RUNNING = "En cours",
}