import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser"
import colors from 'colors'
import connectDB from "./config/db.js"
import userRoutes from  './routes/userRoutes.js'
import productRoutes from  './routes/productRoutes.js'
import morgan from "morgan"
const app= express()

app.use(cors({
    origin:[process.env.FRONTEND_URL, "https://fluffy-carnival-v67567vw7xg53x966-5173.app.github.dev"],
    methods:['POST','GET','PUT','DELETE','PATCH','OPTIONS','HEAD'],
    allowedHeaders:['Content-Type','Authorization','Cookie','X-Custom-Head'],
    credentials:true,
}))
app.use(cookieParser())
  app.use(express.json({ limit: '10mb' }));  // Adjust '10mb' as necessary.
   app.use(express.urlencoded({ limit: '10mb', extended: true })); // For form data
connectDB()
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.get('/', (req,res)=>{
    res.send('Hello web dev')
})
const port =process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`.yellow)
})