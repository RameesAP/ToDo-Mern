import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import todo from "./models/todo.js";


const app = express()


app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log("conneted to DB"))
    .catch((error) => console.log(error));


import postRoute from './Routes/Posts.js'
app.use('/posts',postRoute)


app.get('/todos', async (req, res) => {
    const todos = await todo.find();

    res.json(todos)
})

app.listen(3000, () => console.log("server started on port 3000"))
