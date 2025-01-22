// src/routes/usuarioRoutes.ts

import express from 'express';
import { UsuarioController } from '../controllers/UsuarioController';

const router = express.Router();
const usuarioController = new UsuarioController();

router.get('/usuarios', usuarioController.listarUsuarios);

// Adicione outras rotas conforme necessário

export default router;
