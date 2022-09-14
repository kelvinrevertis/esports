import  express, { response }  from "express";

const app = express()

app.get('/ads',(request, response)=>{
    response.send("Acesso ao Ads")
})

app.listen(3000)