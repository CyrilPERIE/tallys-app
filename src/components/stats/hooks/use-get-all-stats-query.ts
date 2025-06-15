import { BetStrategy, BetType } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const usePostAllStatsQuery = ({ strategy, betType, period }: { strategy: BetStrategy, betType: BetType[], period: Date }) => {
    return useQuery({
        enabled: !!strategy && !!period,
        queryKey: ["all-stats", strategy, betType, period],
        queryFn: async () => {
            const response = await fetch("/api/post-all-stats", {
                method: "POST",
                body: JSON.stringify({ strategy, betType, period }),
            });
            return response.json();
        },
    });
};
