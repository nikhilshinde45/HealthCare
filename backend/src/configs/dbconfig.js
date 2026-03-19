const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();
const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/rural_healthcare');
    console.log(`MongoDB Connected: \${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: \${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;