// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const roomTypesRouter = require('./routes/roomTypes');
const roomsRouter = require('./routes/rooms');

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/room-types', roomTypesRouter);
app.use('/api/v1/rooms', roomsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
