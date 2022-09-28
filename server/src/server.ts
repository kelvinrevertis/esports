import  express, { response }  from "express";

const app = express()

app.get('/games',(request, response) =>{
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