const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  appointment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment',
    required: true,
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  medicines: [
    {
      medicineName: { type: String, required: true },
      dosage: { type: String, required: true },
      duration: { type: String, required: true },
      frequency: { type: String, required: true },
    }
  ],
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Prescription;
