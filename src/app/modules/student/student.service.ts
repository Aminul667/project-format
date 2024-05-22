import { TStudent } from './student.interface';
import { Student } from './student.model';

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await Student.create(studentData); // built in

  // static method
  const student = new Student(studentData);

  if (await student.isUserExits(studentData.id)) {
    throw new Error('user alresdy exists');
  }

  const result = await student.save(); // built in static method
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
