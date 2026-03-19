const express = require('express');
const { getDoctors } = require('../controllers/patient.controller');
const { protect, authorize } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/doctors', protect, authorize('PATIENT'), getDoctors);

module.exports = router;
