import { URLS } from "@/lib/constants/urls";

export class PmuService {
  async getPronostics(
    pmuDate: string,
    reunionNum: string,
    courseNum: string,
    toJson: boolean = true
  ) {
    const pronosticResponse = await fetch(
      URLS.PMU.PRONOSTIC(pmuDate, reunionNum, courseNum)
    );
    const pronosticJson = await pronosticResponse.json();
    return toJson
      ? pronosticJson
      : JSON.stringify(pronosticJson.pronostics, null, 2);
  }

  async getPronosticsDetaille(
    pmuDate: string,
    reunionNum: string,
    courseNum: string,
    toJson: boolean = true
  ) {
    const pronosticsDetailleResponse = await fetch(
      URLS.PMU.PRONOSTICS_DETAILLES(pmuDate, reunionNum, courseNum)
    );
    const pronosticsDetailleJson = await pronosticsDetailleResponse.json();
    return toJson
      ? pronosticsDetailleJson
      : JSON.stringify(pronosticsDetailleJson, null, 2);
  }

  async getRapportsDefinitifs(
    pmuDate: string,
    reunionNum: string,
    courseNum: string,
    toJson: boolean = true
  ) {
    const rapportsDefinitifsResponse = await fetch(
      URLS.PMU.RAPPORTS_DEFINITIFS(pmuDate, reunionNum, courseNum)
    );
    const rapportsDefinitifsJson = await rapportsDefinitifsResponse.json();
    return toJson
      ? rapportsDefinitifsJson
      : JSON.stringify(rapportsDefinitifsJson, null, 2);
  }

  async getProgramme(pmuDate: string, toJson: boolean = true) {
    const programmeResponse = await fetch(URLS.PMU.PROGRAMME(pmuDate));
    const programmeJson = await programmeResponse.json();
    const programme = programmeJson.programme;
    return toJson ? programme : JSON.stringify(programme, null, 2);
  }

  async getResults(pmuDate: string, reunionNum: string, courseNum: string, toJson: boolean = true) {
    const resultsResponse = await fetch(URLS.PMU.COURSE(pmuDate, reunionNum, courseNum));
    const resultsJson = await resultsResponse.json();
    const ordreArrivee = resultsJson.ordreArrivee;
    return toJson ? ordreArrivee : JSON.stringify(ordreArrivee, null, 2);
  }

  async getRandomHorseFromCourse(pmuDate: string, reunionNum: string, courseNum: string) {
    const results = await this.getResults(pmuDate, reunionNum, courseNum, false);
    return results[Math.floor(Math.random() * results.length)][0];
  }

  async getCourses(pmuDate: string) {
    const programme = await this.getProgramme(pmuDate);
    let courses: Record<string, string[]> = {};

    programme.reunions.forEach((reunion: any) => {
      courses[reunion.numOfficiel] = [];
      reunion.courses.forEach((course: any) => {
        courses[reunion.numOfficiel].push(course.numExterne);
      });
    });
    return courses;
  }

  async getCoursesByPmuDates(pmuDates: string[]) {
    let programmes: Record<string, Record<string, string[]>> = {};
    for (const pmuDate of pmuDates) {
      const courses = await this.getCourses(pmuDate);
      programmes[pmuDate] = courses;
    }
    return programmes;
  }
}
