"use server";

import { OpenaiService } from "@/server/services/openai-service";

export async function predictRaceAction(pmuDate: string, reunionNum: string, courseNum: string) {
  const openaiService = new OpenaiService();
  await openaiService.predictRace(pmuDate, reunionNum, courseNum);
}