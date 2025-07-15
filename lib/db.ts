//
//  instância do banco de dados
// faz com que o hot reload não crie múltiplas instâncias do client
// e cause problemas de conexão
//

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined
}

const db = globalThis.prisma || new PrismaClient(); 

if(process.env.NODE_ENV !== "production"){
  globalThis.prisma = db;
};

export { db };