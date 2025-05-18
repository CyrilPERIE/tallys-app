import { OpenaiService } from "@/server/services/openai-service";

export const generateCompletion = async (content: string) => {
    const openaiService = new OpenaiService();
    const completion = await openaiService.generateCompletion(content);
    return completion;
}
