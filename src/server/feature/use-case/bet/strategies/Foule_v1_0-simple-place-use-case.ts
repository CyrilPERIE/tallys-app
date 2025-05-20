"use server";

import { CourseIdentifiers } from "@/domain/entities/utils";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { OpenaiService } from "@/server/services/external/openai-service";
import { PROMPT_FOULE_V1_0 } from "@/lib/constants/prompts";
import { z } from "zod";
import { BetService } from "@/server/services/internal/bet-service";
import { courseIdentifiersToCourseId } from "@/lib/utils/pmu";
import { BetStrategy } from "@prisma/client";
const Foule_v1_0SimplePlaceSchema = z.object({
  result: z.array(z.number()),
});

type Foule_v1_0SimplePlaceSchema = z.infer<typeof Foule_v1_0SimplePlaceSchema>;

export const Foule_v1_0SimplePlaceUseCase = async (
  courseIdentifiers: CourseIdentifiers
) => {
  const pmuService = new PmuAPIService();
  const openaiService = new OpenaiService();
  const betService = new BetService();

  const courseId = courseIdentifiersToCourseId(courseIdentifiers);
  const { pmuDate, reunionNum, courseNum } = courseIdentifiers;

  const pronostics = (await pmuService.getPronostics(
    { pmuDate, reunionNum, courseNum },
    false
  )) as string;
  const pronosticsDetaille = (await pmuService.getPronosticsDetaille(
    { pmuDate, reunionNum, courseNum },
    false
  )) as string;
  const rapportsDefinitifs = (await pmuService.getRapportsDefinitifs(
    courseIdentifiers,
    false
  )) as string;
  const prompt = PROMPT_FOULE_V1_0(
    pronostics,
    pronosticsDetaille,
    rapportsDefinitifs
  );
  const completion: Foule_v1_0SimplePlaceSchema =
    await openaiService.generateCompletion(prompt, Foule_v1_0SimplePlaceSchema);
  const betCreated = await betService.create({
    courseId,
    horseNums: completion.result,
    amount: 1,
    strategy: BetStrategy.Foule_v1_0,
  });
  return betCreated;
};
