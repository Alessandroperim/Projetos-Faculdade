// src/routes/lanceRoutes.ts

import express from 'express';
import { LanceController } from '../controllers/LanceController';

const router = express.Router();
const lanceController = new LanceController();

router.get('/lances', lanceController.listarLances);

// Adicione outras rotas conforme necessário

export default router;
