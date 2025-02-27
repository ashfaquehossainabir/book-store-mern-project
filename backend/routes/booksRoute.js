// Modules
import express from "express"

// Components
import { Book } from "../models/bookModel.js"


const router = express.Router()

// Route for save a new book
router.post("/", async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Send all required fields: Title, Author, publishYear" })
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        const book = await Book.create(newBook)

        return res.status(201).send(book)
    } catch (err) {
        console.error(err.message)
        res.status(500).send({ message: err.message })
    }
})

// Route for Get all books from database
router.get("/", async (req, res) => {
    try {
        const books = await Book.find({})

        return res.status(200).json({
            count: books.length,
            Data: books
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send({ message: err.message })
    }
})

// Route for Get one book from database by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params

        const book = await Book.findById(id)

        return res.status(200).json(book)

    } catch (err) {
        console.error(err.message)
        res.status(500).send({ message: err.message })
    }
})

// Route for update a book
router.put("/:id", async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Send all required fields: Title, Author, publishYear" })
        }

        const { id } = req.params

        const result = await Book.findByIdAndUpdate(id, req.body)

        if(!result) {
            return res.status(404).json({message: "Book not found"})
        }

        return res.status(200).send({message: "Book updated Successfully"})

    } catch (err) {
        console.error(err.message)
        res.status(500).send({ message: err.message })
    }
})

// Route for delete a book
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params

        const result = await Book.findByIdAndDelete(id)

        if(!result) {
            return res.status(404).json({ message: "Book not found" })
        }

        return res.status(200).send({ message: "Book deleted Successfully" })

    } catch (err) {
        console.error(err.message)
        res.status(500).send({ message: err.message })
    }
})


export default router