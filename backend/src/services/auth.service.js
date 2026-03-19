const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Pharmacist = require('../models/Pharmacist');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

class AuthService {
  static generateToken(id, role) {
    return jwt.sign({ id, role }, process.env.JWT_SECRET || 'fallback_secret', {
      expiresIn: '30d',
    });
  }

  static async registerPatient(data) {
    const patientExists = await Patient.findOne({ email: data.email });
    if (patientExists) {
      throw new Error('Patient with this email already exists');
    }

    const patient = await Patient.create(data);
    return {
      _id: patient._id,
      email: patient.email,
      fullName: patient.fullName,
      role: patient.role,
      token: this.generateToken(patient._id, patient.role),
    };
  }

  static async registerDoctor(data) {
    console.log(data);
    const doctorExists = await Doctor.findOne({ email: data.email });
    console.log(doctorExists);

    if (doctorExists){
      throw new Error('Doctor with this email already exists');
    }
   console.log("before");
    try {
    const doctor = await Doctor.create(data);
    console.log("after create");

    return {
      _id: doctor._id,
      email: doctor.email,
      fullName: doctor.fullName,
      role: doctor.role,
      token: this.generateToken(doctor._id, doctor.role),
    };

  } catch (err) {
    console.log("CREATE ERROR:", err);
    throw err;
  }
}

  

  static async registerPharmacist(data) {
    const pharmacistExists = await Pharmacist.findOne({ email: data.email });
    if (pharmacistExists) {
      throw new Error('Pharmacist with this email already exists');
    }

    const pharmacist = await Pharmacist.create(data);
    return {
      _id: pharmacist._id,
      email: pharmacist.email,
      fullName: pharmacist.fullName,
      role: pharmacist.role,
      token: this.generateToken(pharmacist._id, pharmacist.role),
    };
  }

  static async loginUser(email, password) {
    let user = await Patient.findOne({ email });
    
    if (!user) {
      user = await Doctor.findOne({ email });
    }
    
    if (!user) {
      user = await Pharmacist.findOne({ email });
    }

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    return {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
      token: this.generateToken(user._id, user.role),
    };
  }
}

module.exports = AuthService;
