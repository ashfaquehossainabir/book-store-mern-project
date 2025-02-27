// Modules
import express, { request } from "express"
import mongoose from "mongoose"
import cors from "cors"

// Components
import { PORT, mongoURI } from "./config.js"
import { Book } from "./models/bookModel.js"
import booksRoute from "./routes/booksRoute.js"

const app = express()

// Middleware for parsing req.body
app.use(express.json())

// Middleware for handling CORS Policy
// Option: 1
app.use(cors())

// Option: 2
// app.use(
//     cors({
//         origin: 'https://book-store-mern-project-sd7v.onrender.com',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.get("/", (req, res) => {
    console.log(req)

    return res.status(234).send("Welcome to MERN Stack App")
})

app.use("/books", booksRoute)

mongoose.connect(mongoURI)
        .then(() => {
            console.log("App connected to database")

            app.listen(PORT, () => {
                console.log(`App is listening to the PORT: ${PORT}`)
            })
        })
        .catch((err) => {
            console.error(err)
        })