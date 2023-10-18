require('dotenv').config() //created an environmental variable called PORT and asked to be required here

// Creating a web server using Express Framework

const express = require('express') // importing express framework by asking for express module

const workoutRoutes = require('./routes/workouts')

//Creating an express instance and assiging it to app variable, that makes it an express app
const app = express() // we will use this app object to configure and define the routes and behavior of the web server


// setting up a middleware
app.use(express.json())

app.use((req, res, next) =>{ 
    (req.path, req.method)
    next()
}) 

// Defining a get Route, A route is a method which defines how your application should respond to specific HTTP requests
/*app.get('/', (req, res) => { // Using a 'GET' route method here to retrieve data, also utilized Route handler which are
    res.json({msg: "Welcome to the app"}) // request(information about the incoming data) and response(sending a response back to client) here
})*/

app.use('/api/workouts', workoutRoutes) // by using this, all our requests will be handled by this express router

// Listen for HTTP requests 
app.listen(process.env.PORT, () =>{ // an arrow function that defines a callback to execute when the server starts
    console.log('Listening for port', process.env.PORT) // displaying this message to let us know that it is listening for incoming requests
}) 

