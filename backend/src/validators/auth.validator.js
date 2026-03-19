const { z } = require('zod');

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const baseRegisterSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  fullName: z.string().min(2, "Name must be at least 2 characters long"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
});

const patientRegisterSchema = baseRegisterSchema.extend({
  age: z.number().int().positive().optional(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  village: z.string().optional(),
  address: z.string().optional(),
  bloodGroup: z.string().optional(),
  allergies: z.array(z.string()).optional(),
  chronicDiseases: z.array(z.string()).optional(),
});

const doctorRegisterSchema = baseRegisterSchema.extend({
  specialization: z.string().min(2, "Specialization needed").optional(),
  experienceYears: z.number().int().nonnegative().optional(),
  hospitalName: z.string().min(2).optional(),
  registrationNumber: z.string().min(2).optional(),
  degree: z.array(z.string()).optional(),
  college: z.string().optional(),
});

const pharmacistRegisterSchema = baseRegisterSchema.extend({
  pharmacyName: z.string().min(2, "Pharmacy name is required").optional(),
});

module.exports = {
  loginSchema,
  patientRegisterSchema,
  doctorRegisterSchema,
  pharmacistRegisterSchema
};
