import  express, { response }  from "express";
import { PrismaClient } from "@prisma/client";

const app = express()
const prisma = new PrismaClient({
    log: ['query']
})

app.get('/games',async (request, response) =>{
    const games = await prisma.game.findMany({
        include: {
            _count:{
                select: {
                    ads: true,
                }
            }
        }
    })
    return response.json(games)
})

app.post('/ads',(request, response) =>{
    return response.status(201).json([

    ])
})

app.get('/games/:id/ads',async (request,response) => {
    const gameId = request.params.id

    const ads = await prisma.ad.findMany({
        where:{
            gameId,
        }
    })
    return response.json(ads)
    
})

app.get('/games/:id/discord', async (request, response)=>{
   /* const adId = request.params.id;
    return response.send(gameId)// exemplo para retornar o que tiver no "id" exemplo: http://localhost:3000/game/1456/ads*/


    return response.json([])
})

app.listen(3000)