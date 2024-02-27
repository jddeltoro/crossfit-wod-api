 const workoutServices = require('../services/workoutServices');

const getAllWorkouts = async (req, res) => {
    const workouts = await workoutServices.getAllWorkouts();
    res.send({status: "OK", data: workouts});
};

const getWorkoutById = async (req, res) => {
    const workout = await workoutServices.getWorkoutById(req.params.id);
    res.send(workout);
};

const createWorkout = async (req, res) => {
    const {body} = req;
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        res.status(400).send({status: "ERROR", message: "Missing required data"});
        return;
    }
    const workoutSeed = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };
    const workout = await workoutServices.createWorkout(workoutSeed);
    res.status(201).send({status: "OK", data: workout});
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
