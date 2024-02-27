const DB = require("./db.json");
const {saveToDB} = require("../utils/utils");

const getAllWorkouts = async () => {
    return DB.workouts;
};

const createNewWorkout = async (workout) => {
    const alreadyExists = DB.workouts.find(w => w.name === workout.name);
    if (alreadyExists) {
        console.log("Workout already exists");
        return;
    }
    DB.workouts.push(workout);
    saveToDB(DB);
    return workout;
};

module.exports = {
    getAllWorkouts,
    createNewWorkout
};