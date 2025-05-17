import { Bet } from "@/domain/entities/bet";
import prisma from "@/lib/prisma/prisma";

export class BetService {
  async createBet(bet: Bet) {
    const betCreated = await prisma.bet.create({
      data: bet,
    });
  }
}
