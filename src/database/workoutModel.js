const DB = require("./db.json");
const {saveToDB} = require("../utils/utils");

/**
 * @openapi
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: Tommy V  
 *         mode:
 *           type: string
 *           example: For Time
 *         equipment:
 *           type: array
 *           items:
 *             type: string
 *           example: ["barbell", "rope"]
 *         exercises:
 *           type: array
 *           items:
 *             type: string
 *           example: ["21 thrusters", "12 rope climbs, 15 ft", "15 thrusters", "9 rope climbs, 15 ft", "9 thrusters", "6 rope climbs, 15 ft"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt: 
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         trainerTips:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Split the 21 thrusters as needed", "Try to do the 9 and 6 thrusters unbroken", "RX Weights: 115lb/75lb"]
 */

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

const getWorkoutsByMode = async (mode) => {
    return DB.workouts.filter(w => w.mode === mode);
}


module.exports = {
    getAllWorkouts,
    createWorkout,
    getWorkoutById,
    updateWorkout,
    deleteWorkout
};