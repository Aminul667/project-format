import express from 'express';
import { AcademicSemesterControllers } from './accademicSemester.controller';

const router = express.Router();

// it calls controller

router.post(
  '/create-academic-semester',
  AcademicSemesterControllers.createAcademicSemester,
);
// router.get('/', StudentControllers.getAllStudents);

// router.get('/:studentId', StudentControllers.getSingleStudent);

// router.delete('/:studentId', StudentControllers.deleteStudent);

export const AcademicSemesterRoutes = router; // as router is an object itself
