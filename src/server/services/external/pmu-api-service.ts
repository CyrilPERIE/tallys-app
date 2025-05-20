import { URLS } from "@/lib/constants/urls";
import { PronosticsDetaillesResponse } from "@/domain/entities/pmu/details-pronostic";
import { PronosticsResponse } from "@/domain/entities/pmu/pronostic";
import {
  RapportsDefinitifsResponse,
  RapportsReponse,
} from "@/domain/entities/pmu/rapport";
import { ProgrammeResponse } from "@/domain/entities/pmu/programme";
import { Bet, BetType } from "@prisma/client";
import { CourseIdentifiers } from "@/domain/entities/utils";
import { CourseBase } from "@/domain/entities/pmu/course";

export class PmuAPIService {
  async getPronostics(
    courseIdentifiers: CourseIdentifiers,
    toJson: boolean = true
  ) {
    const pronosticResponse = await fetch(
      URLS.PMU.PRONOSTIC(courseIdentifiers)
    );
    const pronosticJson =
      (await pronosticResponse.json()) as PronosticsResponse;
    return toJson
      ? pronosticJson
      : JSON.stringify(pronosticJson.pronostics, null, 2);
  }

  async getPronosticsDetaille(
    courseIdentifiers: CourseIdentifiers,
    toJson: boolean = true
  ) {
    const pronosticsDetailleResponse = await fetch(
      URLS.PMU.PRONOSTICS_DETAILLES(courseIdentifiers)
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
    const rapportsDefinitifsResponse = await fetch(
      URLS.PMU.RAPPORTS_DEFINITIFS(courseIdentifiers)
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

  async getRapports(
    courseIdentifiers: CourseIdentifiers,
    betType: BetType = BetType.E_SIMPLE_PLACE
  ) {
    const rapportsResponse = await fetch(
      URLS.PMU.RAPPORTS_BY_BET_TYPE(courseIdentifiers, betType)
    );
    if (rapportsResponse.status !== 200) return;
    const rapportsJson = (await rapportsResponse.json()) as RapportsReponse;
    return rapportsJson;
  }

  async getProgramme(pmuDate: string, toJson: boolean = true) {
    const programmeResponse = await fetch(URLS.PMU.PROGRAMME(pmuDate));
    const programmeJson = (await programmeResponse.json()) as ProgrammeResponse;
    return toJson ? programmeJson : JSON.stringify(programmeJson, null, 2);
  }

  async getResults(courseIdentifiers: CourseIdentifiers) {
    const resultsResponse = await fetch(URLS.PMU.COURSE(courseIdentifiers));
    const resultsJson = await resultsResponse.json();
    const ordreArrivee = resultsJson.ordreArrivee;
    return ordreArrivee;
  }

  async getRandomParticipantFromCourse(courseIdentifiers: CourseIdentifiers) {
    const participantsResponse = await fetch(
      URLS.PMU.PARTICIPANTS(courseIdentifiers)
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

  async getCourse(courseIdentifiers: CourseIdentifiers) {
    const data = await fetch(URLS.PMU.COURSE(courseIdentifiers));
    if (data.status !== 200) return;
    const course = (await data.json()) as CourseBase;
    return course;
  }

  async getCourses(pmuDate: string) {
    const programme = (await this.getProgramme(pmuDate)) as ProgrammeResponse;
    const courses: Record<string, string[]> = {};

    programme.programme.reunions.forEach((reunion) => {
      courses[reunion.numOfficiel] = [];
      reunion.courses.forEach((course) => {
        courses[reunion.numOfficiel].push("" + course.numExterne);
      });
    });
    return courses;
  }

  async getAvailableBetTypes(courseIdentifiers: CourseIdentifiers) {
    const course = await this.getCourse(courseIdentifiers);
    if (!course) return [];
    console.log(course);
    const betTypes = course.paris.map((pari) => pari.typePari);
    return betTypes;
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
