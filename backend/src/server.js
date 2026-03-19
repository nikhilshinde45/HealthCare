const dotenv = require('dotenv');

const express = require('express');


const cors = require('cors');

const connectDB = require('./configs/dbconfig')

const authRoutes = require('./routes/auth.routes');
const patientRoutes = require('./routes/patient.routes');

dotenv.config({ path: '../.env' });

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);

app.get('/', (req, res) => {
  res.send('Rural Healthcare API is running...');
});


const PORT = process.env.PORT || 5000;
//console.log(PORT);


  app.listen(PORT, () => {
      
    connectDB();

    console.log(`Server is runnig at : http://localhost:${PORT}`);
    //console.log(`Server running on port \${PORT}`);
  });
