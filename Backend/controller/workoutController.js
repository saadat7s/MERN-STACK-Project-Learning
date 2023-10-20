const Workout = require('../Models/WorkoutModel')
const mongoose = require('mongoose') // importing mongoose for object type validation
 
// get all the workout
const getWorkouts = async(req, res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1}) // by sorting, the newest ones will be at the top
    res.status(200).json(workouts)
}
// get a single workout 
const getWorkout = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){ // validating the object id
        return res.status(404).json({error: 'no such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workout exists'})
    }

    res.status(200).json(workout)
}
// create a new workout
const createWorkout = async(req, res) =>{
    const {title, reps, load} = req.body

// add doc to db
    try{
    const workout = await Workout.create({title, reps, load})
    res.status(200).json(workout)
    } catch(error){
       res.status(400).json({error: error.message})
    }
}


// update a workout
const updateWorkout = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){ // validating the object id
        return res.status(404).json({error: 'no such workout'})
    }

    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: 'No such workout exists'})
    }

    res.status(200).json(workout)
}


// delete a workout 
const deleteWorkout = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){ // validating the object id
        return res.status(404).json({error: 'no such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(404).json({error: 'No such workout exists'})
    }

    res.status(200).json(workout)
}



module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
    
}