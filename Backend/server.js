// Creating a web server using Express Framework

const express = require('express') // importing express framework by asking for express module

//Creating an express instance and assiging it to app variable, that makes it an express app
const app = express() // we will use this app object to configure and define the routes and behavior of the web server

// Listen for HTTP requests 
app.listen(4000, () =>{ // an arrow function that defines a callback to execute when the server starts
    console.log('Listening for port 4000') // displaying this message to let us know that it is listening for incoming requests
}) 