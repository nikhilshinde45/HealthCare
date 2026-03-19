const express = require('express');
const { registerPatient, registerDoctor, registerPharmacist, loginUser } = require('../controllers/auth.controller');
const validate = require('../middlewares/validate.middleware');
const { patientRegisterSchema, doctorRegisterSchema, pharmacistRegisterSchema, loginSchema } = require('../validators/auth.validator');

const router = express.Router();

router.post('/patient/register', validate(patientRegisterSchema), registerPatient);

router.post('/doctor/register', validate(doctorRegisterSchema), registerDoctor);

router.post('/pharmacist/register', validate(pharmacistRegisterSchema), registerPharmacist);

router.post('/login', validate(loginSchema), loginUser);

module.exports = router;
