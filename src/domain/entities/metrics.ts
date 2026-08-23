export interface Metric {
    name: string;
    value: number;
    type: MetricType;
    created_at: Date;
    updated_at: Date;
}

export enum MetricType {
    COUNT = "count",
    DURATION = "duration",
    PERCENTAGE = "percentage",
}