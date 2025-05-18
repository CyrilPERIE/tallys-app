import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class OpenaiService {
  async generateCompletion(content: string, toJson: boolean = false) {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ role: "user", content: content }],
    });
    let result = completion.choices[0].message.content;
    if (toJson && result) {
      try {
        result =
          result?.replace(/^```json\n/, "").replace(/\n```$/, "") || "{}";
        return JSON.parse(result as string);
      } catch (error) {
        return {};
      }
    }
    return result;
  }
}
