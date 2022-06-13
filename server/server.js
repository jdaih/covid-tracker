import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

const app = express()
const port = process.env.PORT || 8000
const connection_url= `mongodb+srv://justin:justin123@cluster0.na7nase.mongodb.net/?retryWrites=true&w=majority`

// Middleware
app.use(express.json)
app.use(Cors())

// Database
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.get('/', (req, res) => res.status(200).send('Hello World'));

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))