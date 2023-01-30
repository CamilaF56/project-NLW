// Back-end API RESTful - rotas através de HTTPS
// Fastify para rotas
import Fastify from "fastify";
import cors from "@fastify/cors"
import { prisma } from "./lib/prisma";
import { appRoutes } from "./lib/routes";

const app = Fastify();


// Fazendo com que o front-end acesse informações do backend ou seja integração a dos dois
app.register(cors, {
    origin: true,
}) 

app.register(appRoutes)

/**
 * Metodos HTTP(metodos para se usar com o app) - por aqui somente usa Get: 
 *  Get - pegar dados,
 *  Post - criar algo,
 *  Put - atualizar recurso por completo, 
 *  Patch - atualizar recurso específico,
 *  Delete - deletar recurso
 */

app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then(() =>{
    console.log("HTTP Server Running")
})
