import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

// it calls controller

router.get('/', StudentControllers.getAllStudents);

router.get(
  '/:id',
  // auth('admin', 'faculty'),
  StudentControllers.getSingleStudent,
);

router.patch(
  '/:id',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

router.delete('/:id', StudentControllers.deleteStudent);

export const StudentRoutes = router; // as router is an object itself
