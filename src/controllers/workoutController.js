 const workoutServices = require('../services/workoutServices');

const getAllWorkouts = async (req, res) => {
    console.log("getAllWorkouts");
    const workouts = await workoutServices.getAllWorkouts();
    res.send({status: "OK", data: workouts});
};

const getWorkoutById = async (req, res) => {
    console.log(req.params);
    if (!req.params.id) {
        res.status(400).send({status: "ERROR", message: "Missing workout ID"});
        return;
    }
    const workout = await workoutServices.getWorkoutById(req.params.id);
    res.send({ status: "OK", data: workout });
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
    if (!req.params.id) {
        res.status(400).send({status: "ERROR", message: "Missing workout ID"});
        return;
    }
    const {body} = req;
    const workout = await workoutServices.updateWorkout(body, req.params.id);
    res.send({status: "OK", data: workout})
};

const deleteWorkout = async (req, res) => {
    if (!req.params.id) {
        res.status(400).send({status: "ERROR", message: "Missing workout ID"});
        return;
    }
    const workout = await workoutServices.deleteWorkout(req.params.id);
    res.status(204).send({status: "OK", data: workout});
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};
