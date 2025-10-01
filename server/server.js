import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser"
import colors from 'colors'
import connectDB from "./config/db.js"
const app= express()

app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:['POST','GET','PUT','DELETE','PATCH','OPTIONS','HEAD'],
    allowedHeaders:['Content-Type','Authorization','Cookie','X-custom-Head']
}))
app.use(cookieParser())
app.use(express.json())
connectDB()
app.get('/', (req,res)=>{
    res.send('Hello web dev')
})
const port =process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`.yellow)
})