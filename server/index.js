// Import Dependencies
const express = require('express')
const cors = require('cors')

// Create our app object
const app = express()

// Set-up middleware
app.use(cors())

// Home route for testing app
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Declare a variable for our port number
const PORT = process.env.PORT || 4000;


// Turn on the server listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))