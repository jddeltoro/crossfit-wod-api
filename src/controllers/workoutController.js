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
    let missingFields = ['name', 'mode', 'equipment', 'exercises', 'trainerTips'].filter(field => !body[field]);

    if (missingFields.length) {
        res.status(400).send({
            status: "ERROR", 
            message: `Missing required fields, fields missing in the request: ${missingFields.join(', ')}`
        });
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

const getWorkoutsByMode = async (req, res) => {
    const workouts = await workoutServices.getWorkoutsByMode(req.params.mode);
    res.send({status: "OK", data: workouts});
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout,
    getWorkoutsByMode
};
