// src/app.ts

import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes';
import leilaoRoutes from './routes/leilaoRoutes';
import lanceRoutes from './routes/lanceRoutes';

const app = express();

app.use(express.json());
app.use('/api', usuarioRoutes);
app.use('/api', leilaoRoutes);
app.use('/api', lanceRoutes);

export default app;
