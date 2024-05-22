import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, 'capitalize form')
    .required()
    .messages({
      'string.empty': 'First Name is required',
      'string.max': 'First Name cannot be more than 20 characters',
      'string.pattern.name': '{#value} is not in capitalize form',
    }),
  middleName: Joi.string().optional(),
  lastName: Joi.string()
    .pattern(/^[A-Za-z]+$/, 'alpha')
    .required()
    .messages({
      'string.empty': 'Last Name is required',
      'string.pattern.name': '{#value} is not valid',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': 'Father Occupation is required',
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.empty': 'Father Contact No is required',
  }),
  motherName: Joi.string().required().messages({
    'string.empty': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': 'Mother Occupation is required',
  }),
  motherContactNo: Joi.string().required().messages({
    'string.empty': 'Mother Contact No is required',
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Local Guardian Name is required',
  }),
  occupation: Joi.string().required().messages({
    'string.empty': 'Local Guardian Occupation is required',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Local Guardian Contact No is required',
  }),
  address: Joi.string().required().messages({
    'string.empty': 'Local Guardian Address is required',
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'object.base': 'Name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': '{#value} is not valid',
    'string.empty': 'Gender is required',
  }),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    'string.email': '{#value} is not a valid email',
    'string.empty': 'Email is required',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact No is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency Contact No is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional()
    .messages({
      'any.only': '{#value} is not a valid blood group',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present Address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent Address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'object.base': 'Guardian is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'object.base': 'Local Guardian is required',
  }),
  profileImg: Joi.string().optional(),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only': '{#value} is not valid',
  }),
});

export default studentValidationSchema;
