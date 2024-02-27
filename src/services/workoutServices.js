const Workout = require("../database/workoutModel");

const getAllWorkouts = async () => {
    const workouts = await Workout.getAllWorkouts();
    return workouts;
};

const getWorkoutById = async (id) => {
    return `Get workout with id ${id}`;
};

const createWorkout = async () => {
    return "Create a new workout";
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