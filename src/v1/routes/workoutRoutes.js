const express = require('express');
const workoutController = require('../../controllers/workoutController');
const router = express.Router();

router.get('/', workoutController.getAllWorkouts);

router.get('/:workoutId', workoutController.getWorkoutById);

router.post('/', workoutController.createWorkout);

router.patch('/:workoutId', workoutController.updateWorkout);

router.delete('/:workoutId', workoutController.deleteWorkout);

module.exports = router;