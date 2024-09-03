const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./src/routes/authRoutes');
const tripRoutes = require('./src/routes/tripRoutes');
const reservationRoutes = require('./src/routes/reservationRoutes');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/reservations', reservationRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor em execução na porta ${PORT}`));