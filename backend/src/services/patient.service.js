const Doctor = require('../models/Doctor');

class PatientService {
  static async getAllDoctors() {
    return await Doctor.find({}, '-password');
  }
}

module.exports = PatientService;
