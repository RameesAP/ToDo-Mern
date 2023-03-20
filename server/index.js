import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import bodyParser from "body-parser";


const app = express()


app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))
dotenv.config()

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}`))).
    catch((error) => { console.log(error); })





import postRoute from './Routes/Posts.js'
app.use('/todos',postRoute)





