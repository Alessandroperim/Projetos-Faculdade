// src/routes/leilaoRoutes.ts

import express from 'express';
import { LeilaoController } from '../controllers/LeilaoController';

const router = express.Router();
const leilaoController = new LeilaoController();

router.get('/leiloes', leilaoController.listarLeiloes);

// Adicione outras rotas conforme necessário

export default router;
