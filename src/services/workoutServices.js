const { v4: uuid } = require("uuid");
const Workout = require("../database/workoutModel");

const getAllWorkouts = async () => {
    const workouts = await Workout.getAllWorkouts();
    return workouts;
};

const getWorkoutById = async (id) => {
    const workout = await Workout.getWorkoutById(id);
    return workout;
};

const createWorkout = async (newWorkout) => {
    const workout = {
        ...newWorkout,
        id: uuid(),
        created_at : new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updated_at : new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    };
    const createdWorkout = await Workout.createWorkout(workout);
    return createdWorkout;
};

const updateWorkout = async (body, id) => {
    const workout = await Workout.updateWorkout(body, id);
    return workout;
};

const deleteWorkout = async (id) => {
    const workout = await Workout.deleteWorkout(id);
    return workout;
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};