"use server";

import { OpenaiService } from "@/server/services/openai-service";

export async function simulateByDaysAction(pmuDates: string[]) {
  const openaiService = new OpenaiService();
  await openaiService.simulateByDays(pmuDates);
}