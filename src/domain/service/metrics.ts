import { fetchBackend } from "@/src/lib/backend-client";
import { Metric } from "@/src/domain/entities/metrics";

export const getMetrics = async (): Promise<Metric[] | undefined> => {
    try {
        const data = await fetchBackend<Metric[]>({ endpoint: "/metrics" });
        return data;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}