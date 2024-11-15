import "dotenv/config"
import express, { urlencoded } from "express"  ;
const app = express() ;
const port = process.env.port || 3000 ;

app.use(express.json()) ;
app.use(express.urlencoded({extended : false}))
app.listen(port , (req,res)=>{
    console.log("listening") ;
})

/// importing routing
import routes from "./routes/index.js"
app.use(routes) ;



app.get("/" , (req,res)=>{
    res.send("app is listening") ;
})