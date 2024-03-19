const express = require('express');
const mongoose = require('mongoose');
const roomTypesRouter = require('./routes/roomTypes');
const roomsRouter = require('./routes/rooms');

const app = express();
const PORT = 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://exprotech12:Exprotech12@exprotech1234.t23typb.mongodb.net/')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Use roomTypes and rooms routers middleware
app.use('/api/v1/room-types', roomTypesRouter);
app.use('/api/v1/rooms', roomsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
