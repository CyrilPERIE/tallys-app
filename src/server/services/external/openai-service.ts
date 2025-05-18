import { OpenAI } from "openai";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class OpenaiService {
  async generateCompletion(content: string, schema: z.ZodSchema, maxAttempts: number = 3) {
    let attempts = 0;
    while (attempts < maxAttempts) {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [{ role: "user", content: content }],
      });
      let result = completion.choices[0].message.content;
      const parsedResult = schema.safeParse(result);
      if (parsedResult.success) {
        return parsedResult.data;
      }
      attempts++;
    }
    return {};
  }
}
