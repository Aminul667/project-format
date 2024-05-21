import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// it calls controller
router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router; // as router is an object itself
