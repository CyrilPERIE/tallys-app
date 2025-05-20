"use server"

import { PmuAPIService } from "../services/external/pmu-api-service";
import { CourseIdentifiers } from "@/lib/types/pmu";

export const getBetTypeAction = async (courseIdentifiers: CourseIdentifiers) => {
    const pmuService = new PmuAPIService();
    const betTypes = await pmuService.getAvailableBetTypes(courseIdentifiers);
    console.log(betTypes);
}