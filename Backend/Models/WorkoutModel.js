// in this file, we are gonna define how our workout document should look
// mongodb by itself does not have any schema so mongoose provides this feature


const mongoose = require('mongoose') // importing mongoose here

const Schema = mongoose.Schema // function to create schema

const workoutSchema = new Schema({
    title: {
        type: String, // defining datatype here so database does the validation, this is another feature provided by mongoose
        required: true // these are made required so if add a new workout document and any of these is missing, it is not gonna allow us to do that
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})// timestamps are defined so that everytime a document is created or updated, we will know
// Done creating a schema for now

module.exports = mongoose.model('Workout', workoutSchema) // this is gonna create a model which we can export to another files onwards