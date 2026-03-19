const AuthService = require('../services/auth.service');

const registerPatient = async (req, res) => {
  try {
    const patientData = await AuthService.registerPatient(req.body);
    res.status(201).json(patientData);
  } catch (error) {
    if (error.message.includes('already exists')) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

const registerDoctor = async (req, res) => {
  try {
    const doctorData = await AuthService.registerDoctor(req.body);
    //console.log(doctorData);
    res.status(201).json(doctorData);
    
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log(error.message);
      return  res.status(400).json({ message: error.message });
    }
    console.log("HI");
    res.status(500).json({ message: "Error" });
  }
};

const registerPharmacist = async (req, res) => {
  try {
    const pharmacistData = await AuthService.registerPharmacist(req.body);
    res.status(201).json(pharmacistData);
  } catch (error) {
    if (error.message.includes('already exists')) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await AuthService.loginUser(email, password);
    res.json(userData);
  } catch (error) {
    if (error.message === 'Invalid email or password') {
      return res.status(401).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerPatient,
  registerDoctor,
  registerPharmacist,
  loginUser
};
