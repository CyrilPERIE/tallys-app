import { CourseIdentifiers } from "@/lib/types/pmu";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { OpenaiService } from "@/server/services/external/openai-service";
import { PROMPT_FOULE_V1_0 } from "@/lib/constants/prompts";
import { z } from "zod";

const schema = z.object({
  result: z.array(z.string().refine((val) => !isNaN(parseInt(val)))),
});

export const Foule_v1_0UseCase = async ({
  pmuDate,
  reunionNum,
  courseNum,
}: CourseIdentifiers) => {
  const pmuService = new PmuAPIService();
  const openaiService = new OpenaiService();
  const pronostics = (await pmuService.getPronostics(
    pmuDate,
    reunionNum,
    courseNum,
    false
  )) as string;
  const pronosticsDetaille = (await pmuService.getPronosticsDetaille(
    pmuDate,
    reunionNum,
    courseNum,
    false
  )) as string;
  const rapportsDefinitifs = (await pmuService.getRapportsDefinitifs(
    pmuDate,
    reunionNum,
    courseNum,
    false
  )) as string;
  const prompt = PROMPT_FOULE_V1_0(
    pronostics,
    pronosticsDetaille,
    rapportsDefinitifs
  );
  const completion = await openaiService.generateCompletion(prompt, schema);
  return completion;
};
