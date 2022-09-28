import  express, { response }  from "express";
import { PrismaClient } from "@prisma/client";

const app = express()
const prisma = new PrismaClient()

app.get('/games',(request, response) =>{
    const games = prisma.game.findMany({})
    return response.json([

    ])
})

app.post('/ads',(request, response) =>{
    return response.status(201).json([

    ])
})

app.get('/ads/:id/discord',(request, response)=>{
   /* const adId = request.params.id;
    return response.send(gameId)// exemplo para retornar o que tiver no "id" exemplo: http://localhost:3000/game/1456/ads*/
    return response.json([

    ])
})

app.listen(3000)