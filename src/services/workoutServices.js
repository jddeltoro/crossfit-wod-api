const { v4: uuid } = require("uuid");
const Workout = require("../database/workoutModel");

const getAllWorkouts = async () => {
    const workouts = await Workout.getAllWorkouts();
    return workouts;
};

const getWorkoutById = async (id) => {
    return `Get workout with id ${id}`;
};

const createWorkout = async (newWorkout) => {
    const workout = {
        ...newWorkout,
        id: uuid(),
        created_at : new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updated_at : new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    };
    const createdWorkout = await Workout.createNewWorkout(workout);
    return createdWorkout;
};

const updateWorkout = async (id) => {
    return `Update workout with id ${id}`;
};

const deleteWorkout = async (id) => {
    return `Delete workout with id ${id}`;
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};