// src/controllers/LanceController.ts

import { Request, Response } from 'express';
import { LanceService } from '../services/LanceService';

const lanceService = new LanceService();

export class LanceController {
  async listarLances(req: Request, res: Response) {
    const lances = await lanceService.listarLances();
    res.json(lances);
  }

  // Implemente outros métodos do controlador conforme necessário
}
