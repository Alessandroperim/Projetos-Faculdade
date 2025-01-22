// src/services/UsuarioService.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UsuarioService {
  async listarUsuarios() {
    return prisma.usuario.findMany();
  }

  // Implemente outras operações de serviço conforme necessário
}
