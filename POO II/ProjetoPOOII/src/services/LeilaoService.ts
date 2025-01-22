// src/services/LeilaoService.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class LeilaoService {
  async listarLeiloes() {
    return prisma.leilao.findMany();
  }

  // Implemente outras operações de serviço conforme necessário
}
