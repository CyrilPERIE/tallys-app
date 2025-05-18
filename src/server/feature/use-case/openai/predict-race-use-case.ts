import { CourseIdentifiers } from "@/lib/types/pmu";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { OpenaiService } from "@/server/services/external/openai-service";
import { PROMPT_PREDICT_RACE } from "@/lib/constants/prompts";

export const predictRaceUseCase = async ({
  date,
  race,
  course,
}: CourseIdentifiers) => {
  const pmuService = new PmuAPIService();
  const openaiService = new OpenaiService();
  const pronostics = (await pmuService.getPronostics(
    date,
    race,
    course,
    false
  )) as string;
  const pronosticsDetaille = (await pmuService.getPronosticsDetaille(
    date,
    race,
    course,
    false
  )) as string;
  const rapportsDefinitifs = (await pmuService.getRapportsDefinitifs(
    date,
    race,
    course,
    false
  )) as string;
  const prompt = PROMPT_PREDICT_RACE(
    pronostics,
    pronosticsDetaille,
    rapportsDefinitifs
  );
  const completion = await openaiService.generateCompletion(prompt, true);
  return completion;
};
