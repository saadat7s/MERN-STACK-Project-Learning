const express = require('express') // asking for express package

const Workout = require('../Models/WorkoutModel')

const router = express.Router() //invoking router

// get all workouts
router.get('/', (req, res) =>{
    res.json({mssg: 'Get all the workouts'})
}) // To handle a get requuest


// to get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single workout'})
})

// to post a new workout
router.post('/', async( req, res) => {
    const {title, reps, load} = req.body

    try{
    const workout = await Workout.create({title, reps, load})
    res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
//    res.json({mssg: 'Post a new workout'})
})

// to delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

// to update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'update the workout'})
})


module.exports = router //exporting the router