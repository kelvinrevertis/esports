import  express  from "express";

const app = express()

app.get('/ads',()=>{
    console.log("Acesso ao Ads")
})

app.listen(3000,)