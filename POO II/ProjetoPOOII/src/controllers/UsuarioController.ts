// src/controllers/UsuarioController.ts

import { Request, Response } from 'express';
import { UsuarioService } from '../services/UsuarioService';

const usuarioService = new UsuarioService();

export class UsuarioController {
  async listarUsuarios(req: Request, res: Response) {
    const usuarios = await usuarioService.listarUsuarios();
    res.json(usuarios);
  }

  // Implemente outros métodos do controlador conforme necessário
}
