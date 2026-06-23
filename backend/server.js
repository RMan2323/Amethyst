import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRouter from './routes/productRoute.js'

dotenv.config();

const app = express()
const port = process.env.PORT || 5000

app.use(express.json());  //accept JSON data from body

app.use("/products", productRouter)

app.listen(port, ()=>{
    connectDB();
    console.log("Server started at http://localhost:"+port);
});