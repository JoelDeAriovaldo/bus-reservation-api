const express = require('express');
const router = express.Router();

// Example callback function
const reservationController = {
    createReservation: (req, res) => {
        // Your logic here
        res.send('Reservation created');
    }
};

// Correct usage of router.post
router.post('/reservations', reservationController.createReservation);

module.exports = router;