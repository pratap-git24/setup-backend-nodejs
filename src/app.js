import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();

app.use(cors({
    origin:process.env.CORS-ORIGIN,
    credentials:true
}))

app.use(express.json({limit:'15kb'}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

export default app;