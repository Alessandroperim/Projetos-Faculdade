// src/services/LanceService.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class LanceService {
  async listarLances() {
    return prisma.lance.findMany();
  }

  // Implemente outras operações de serviço conforme necessário
}
