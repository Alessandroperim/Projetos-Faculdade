// src/controllers/LeilaoController.ts

import { Request, Response } from 'express';
import { LeilaoService } from '../services/LeilaoService';

const leilaoService = new LeilaoService();

export class LeilaoController {
  async listarLeiloes(req: Request, res: Response) {
    const leiloes = await leilaoService.listarLeiloes();
    res.json(leiloes);
  }

  // Implemente outros métodos do controlador conforme necessário
}
