const PatientService = require('../services/patient.service');

const getDoctors = async (req, res) => {
  try {
    const doctors = await PatientService.getAllDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching doctors', error: error.message });
  }
};

module.exports = {
  getDoctors
};
