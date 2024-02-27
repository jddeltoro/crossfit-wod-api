 const workoutServices = require('../services/workoutServices');

const getAllWorkouts = async (req, res) => {
    const workouts = await workoutServices.getAllWorkouts();
    res.send(JSON.stringify(workouts, null, 2));
};

const getWorkoutById = async (req, res) => {
    const workout = await workoutServices.getWorkoutById(req.params.id);
    res.send(workout);
};

const createWorkout = async (req, res) => {
    const workout = await workoutServices.createWorkout();
    res.send(workout);
};

const updateWorkout = async (req, res) => {
    const workout = await workoutServices.updateWorkout(req.params.id);
    res.send(workout);
};

const deleteWorkout = async (req, res) => {
    const workout = await workoutServices.deleteWorkout(req.params.id);
    res.send(workout);
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};
