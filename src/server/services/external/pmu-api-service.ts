import { URLS } from "@/lib/constants/urls";
import { PronosticsDetaillesResponse } from "@/domain/entities/pmu/details-pronostic";
import { PronosticsResponse } from "@/domain/entities/pmu/pronostic";
import { RapportsDefinitifsResponse } from "@/domain/entities/pmu/rapport";
import { ProgrammeResponse } from "@/domain/entities/pmu/programme";
import { Bet } from "@prisma/client";
import { CourseIdentifiers } from "@/lib/types/pmu";

export class PmuAPIService {
  async getPronostics(
    pmuDate: string,
    reunionNum: string,
    courseNum: string,
    toJson: boolean = true
  ) {
    const pronosticResponse = await fetch(
      URLS.PMU.PRONOSTIC(pmuDate, reunionNum, courseNum)
    );
    const pronosticJson =
      (await pronosticResponse.json()) as PronosticsResponse;
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
    const pronosticsDetailleJson =
      (await pronosticsDetailleResponse.json()) as PronosticsDetaillesResponse;
    return toJson
      ? pronosticsDetailleJson
      : JSON.stringify(pronosticsDetailleJson, null, 2);
  }

  async getRapportsDefinitifs(
    courseIdentifiers: CourseIdentifiers,
    toJson: boolean = true
  ) {
    const { pmuDate, reunionNum, courseNum } = courseIdentifiers;
    const rapportsDefinitifsResponse = await fetch(
      URLS.PMU.RAPPORTS_DEFINITIFS(pmuDate, reunionNum, courseNum)
    );
    if (rapportsDefinitifsResponse.status === 204) {
      return "Rapport definitif non disponible";
    }
    const rapportsDefinitifsJson =
      (await rapportsDefinitifsResponse.json()) as RapportsDefinitifsResponse[];
    return toJson
      ? rapportsDefinitifsJson
      : JSON.stringify(rapportsDefinitifsJson, null, 2);
  }

  async getProgramme(pmuDate: string, toJson: boolean = true) {
    const programmeResponse = await fetch(URLS.PMU.PROGRAMME(pmuDate));
    const programmeJson = (await programmeResponse.json()) as ProgrammeResponse;
    return toJson ? programmeJson : JSON.stringify(programmeJson, null, 2);
  }

  async getResults(courseIdentifiers: CourseIdentifiers) {
    const { pmuDate, reunionNum, courseNum } = courseIdentifiers;
    const resultsResponse = await fetch(
      URLS.PMU.COURSE(pmuDate, reunionNum, courseNum)
    );
    const resultsJson = await resultsResponse.json();
    const ordreArrivee = resultsJson.ordreArrivee;
    return ordreArrivee;
  }

  async getRandomParticipantFromCourse(
    pmuDate: string,
    reunionNum: string,
    courseNum: string
  ): Promise<Bet["horseNums"]> {
    const participantsResponse = await fetch(
      URLS.PMU.PARTICIPANTS(pmuDate, reunionNum, courseNum)
    );
    const data = await participantsResponse.json();
    const horseNums = data.participants.map((participant: any) => {
      if (participant.statut === "PARTANT") return participant.numPmu;
    });
    const lenght = horseNums.length;
    const random = Math.floor(Math.random() * lenght);
    const choice = horseNums[random];
    return [choice];
  }

  async getCourses(pmuDate: string) {
    const programme = (await this.getProgramme(pmuDate)) as ProgrammeResponse;
    const courses: Record<string, string[]> = {};

    programme.programme.reunions.forEach((reunion: any) => {
      courses[reunion.numOfficiel] = [];
      reunion.courses.forEach((course: any) => {
        courses[reunion.numOfficiel].push(course.numExterne);
      });
    });
    return courses;
  }

  async getCoursesByPmuDates(pmuDates: string[]) {
    const programmes: Record<string, Record<string, string[]>> = {};
    for (const pmuDate of pmuDates) {
      const courses = await this.getCourses(pmuDate);
      programmes[pmuDate] = courses;
    }
    return programmes;
  }
}
