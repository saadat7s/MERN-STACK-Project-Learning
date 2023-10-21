require('dotenv').config() //created an environmental variable called PORT and asked to be required here

// Creating a web server using Express Framework

const express = require('express') // importing express framework by asking for express module
const cors = require('cors');

const mongoose = require('mongoose') // importing mongoose which is a js library to interact with mongodb

const workoutRoutes = require('./routes/workouts')

//Creating an express instance and assiging it to app variable, that makes it an express app
const app = express() // we will use this app object to configure and define the routes and behavior of the web server

app.use(cors({
    origin: 'http://localhost:3000', // Adjust this URL to your frontend's address
    methods: 'GET,POST', // Adjust allowed HTTP methods
  }));
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

// ROUTES
app.use('/api/workouts', workoutRoutes) // by using this, all our requests will be handled by this express router

// Connect to db
mongoose.connect(process.env.Mongo_URI)
 .then(() => {
    // Listen for HTTP requests 
app.listen(process.env.PORT, () =>{ // an arrow function that defines a callback to execute when the server starts
    console.log('Connected to the db & Listening for port', process.env.PORT) // displaying this message to let us know that it is listening for incoming requests
}) 
 }) //using then method to fire a function when it is done connecting
 .catch((error) => {  //using catch method to fire a function when an error is encountered
    console.log(error) //error can be encountered in case URI, username, or pass is incorrect
 })


