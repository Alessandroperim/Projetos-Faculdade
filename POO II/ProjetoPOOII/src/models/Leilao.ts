// src/models/Leilao.ts

export interface Leilao {
    id: number;
    produto: string;
    preco: number;
    dataLimite: Date;
    donoId: number;
  }
  