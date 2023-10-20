const express = require('express') // asking for express package
const {
   getWorkouts,
   getWorkout,
   createWorkout,
   deleteWorkout,
   updateWorkout
} = require('../controller/workoutController')

const router = express.Router() //invoking router

// get all workouts
router.get('/', getWorkouts)


// to get a single workout
router.get('/:id', getWorkout)

// to post a new workout
router.post('/', createWorkout)

// to delete a workout
router.delete('/:id', deleteWorkout)

// to update a workout
router.patch('/:id', updateWorkout)


module.exports = router //exporting the router