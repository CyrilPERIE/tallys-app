import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/ui/table";
import { ScraperLog, ScraperLogStatus } from "@/src/domain/entities/scraperLog";
import { Badge } from "@/src/ui/badge";
import { Card, CardContent } from "@/src/ui/card";
import { cn } from "@/src/lib/utils";

export const ScraperLogsTable = ({
  scraperLogs,
  className,
}: {
  scraperLogs: ScraperLog[];
  className?: string;
}) => {
  return (
    <Card className={cn("max-h-[min(39rem,70dvh)] min-h-64 overflow-hidden", className)}>
      <CardContent className="h-full overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>RUN</TableHead>
              <TableHead>PIPELINE</TableHead>
              <TableHead>DÉBUT</TableHead>
              <TableHead>DURÉE</TableHead>
              <TableHead>STATUT</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scraperLogs.length > 0 &&
              scraperLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{`run_${log.id}`}</TableCell>
                  <TableCell>{log.scraper}</TableCell>
                  <TableCell>
                    {new Date(log.start_time).toLocaleTimeString()}
                  </TableCell>
                  <TableCell>
                    {log.duration ? `${log.duration.toFixed(2)}s` : `—`}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        log.status === ScraperLogStatus.COMPLETED
                          ? "success"
                          : log.status === ScraperLogStatus.FAILED
                            ? "danger"
                            : "warning"
                      }
                    >
                      {log.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            {scraperLogs.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  Pas de données disponibles
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
