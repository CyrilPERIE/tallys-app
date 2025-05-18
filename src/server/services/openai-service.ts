import { PROMPT_PREDICT_RACE } from "@/lib/constants/prompts";
import { URLS } from "@/lib/constants/urls";
import { OpenAI } from "openai";
import { PmuService } from "./pmu-service";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class OpenaiService {
  private pmuService: PmuService;

  constructor() {
    this.pmuService = new PmuService();
  }

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

  async predictRace(pmuDate: string, reunionNum: string, courseNum: string) {
    const pronostics = await this.pmuService.getPronostics(
      pmuDate,
      reunionNum,
      courseNum,
      false
    );
    const pronosticsDetaille = await this.pmuService.getPronosticsDetaille(
      pmuDate,
      reunionNum,
      courseNum,
      false
    );
    const rapportsDefinitifs = await this.pmuService.getRapportsDefinitifs(
      pmuDate,
      reunionNum,
      courseNum,
      false
    );
    const prompt = PROMPT_PREDICT_RACE(
      pronostics,
      pronosticsDetaille,
      rapportsDefinitifs
    );
    const completion = await this.generateCompletion(prompt, true);
    return completion;
  }

  async simulateByDays(pmuDates: string[]) {
    let counter = 0;
    let gagnant_success = 0;
    let place_success = 0;
    const programmes = await this.pmuService.getCoursesByPmuDates(pmuDates);
    let total_courses = 0;
    for (const programme in programmes) {
      const reunions = programmes[programme];
      for (const reunion in reunions) {
        const courses = reunions[reunion];
        total_courses += courses.length;
      }
    }
    for (const programme in programmes) {
      const reunions = programmes[programme];

      for (const reunion in reunions) {
        const courses = reunions[reunion];
        for (const course of courses) {
          const results = await this.pmuService.getResults(
            programme,
            reunion,
            course
          );
          if (!results?.[0]) continue;
          // const pronostics = await this.predictRace(programme, reunion, course);
          const pronostics = results[Math.floor(Math.random() * results.length)][0];
          if (!pronostics) continue;
          if (isGagnantSuccess(pronostics, results)) {
            gagnant_success++;
          }
          if (isPlaceSuccess(pronostics, results)) {
            place_success++;
          }
          counter++;
          console.log(`${counter}/${total_courses} - ${gagnant_success} - ${place_success}`);
        }
      }
    }
  }
}

const isPlaceSuccess = (pronostics: any, results: any) => {
  const val = parseInt(pronostics);
  return (
    results[0].includes(val) ||
    results[1].includes(val) ||
    (results.length > 6 && results[2].includes(val))
  );
};

const isGagnantSuccess = (pronostics: any, results: any) => {
  const val = parseInt(pronostics);
  return results[0].includes(val);
};
