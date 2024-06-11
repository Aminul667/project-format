import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './course.controller';

const router = express.Router();

// it calls controller

router.post(
  '/create-course',
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get('/:id', CourseControllers.getSingleCourse);

// router.patch(
//   '/:facultyId',
//   validateRequest(
//     CourseValidations.updateAcademicFacultyValidationSchema,
//   ),
//   CourseControllers.updateAcademicFaculty,
// );

router.delete('/:id', CourseControllers.deleteCourse);
router.get('/', CourseControllers.getAllCourses);

export const CourseRoutes = router; // as router is an object itself
