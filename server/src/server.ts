import express, { response } from "express";
import { PrismaClient } from "@prisma/client";
import { convertHour } from "./utils/convert-hour";
import { convertMinutes } from "./utils/convert-minutes";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


const prisma = new PrismaClient({
    log: ['query']
})

app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({

        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })
    return response.json(games)
})

app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id
    const body = request.body

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHour(body.hourStart),
            hourEnd: convertHour(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    })
    return response.status(201).json(body)
})

app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc',
        }

    })
    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutes(ad.hourStart),
            hourEnd: convertMinutes(ad.hourEnd)
        }
    }))

})

app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;
    //return response.send(gameId)// exemplo para retornar o que tiver no "id" exemplo: http://localhost:3000/game/1456/ads*/

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    })
    return response.json({
        discord: ad.discord,
    })
})

app.listen(3000)