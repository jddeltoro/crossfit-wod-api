const DB = require("./db.json");
const {saveToDB} = require("../utils/utils");

const getAllWorkouts = async () => {
    return DB.workouts;
};

const createWorkout = async (workout) => {
    const alreadyExists = DB.workouts.find(w => w.name === workout.name);
    if (alreadyExists) {
        return {message: "Workout already exists"};
    }
    DB.workouts.push(workout);
    saveToDB(DB);
    return workout;
};

const getWorkoutById = async (id) => {
    return DB.workouts.find(w => w.id === id);
};

const updateWorkout = async (workout, id) => {
    const index = DB.workouts.findIndex(w => w.id === id);
    if (index === -1) {
        return {message: "Workout not found"};
    }
    DB.workouts[index] = workout;
    saveToDB(DB);
    return workout;
}

const deleteWorkout = async (id) => {
    const index = DB.workouts.findIndex(w => w.id === id);
    if (index === -1) {
        return {message: "Workout not found"};
    }
    DB.workouts.splice(index, 1);
    saveToDB(DB);
    return {message: "Workout deleted"};
}



module.exports = {
    getAllWorkouts,
    createWorkout,
    getWorkoutById,
    updateWorkout,
    deleteWorkout
};