import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { CourseIdentifiers } from "@/lib/types/pmu";

export const isPlaceSuccess = async (pronostics: number, {pmuDate, reunionNum, courseNum}: CourseIdentifiers) => {
  const pmuService = new PmuAPIService();
  const results = await pmuService.getResults(pmuDate, reunionNum, courseNum);
  return (
    results[0].includes(pronostics) ||
    results[1].includes(pronostics) ||
    (results.length > 6 && results[2].includes(pronostics))
  );
};

export const isGagnantSuccess = async (pronostics: number, {pmuDate, reunionNum, courseNum}: CourseIdentifiers) => {
  const pmuService = new PmuAPIService();
  const results = await pmuService.getResults(pmuDate, reunionNum, courseNum);
  return results[0].includes(pronostics);
};
