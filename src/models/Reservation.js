const db = require('../config/database');

class Reservation {
    static async create(reservationData) {
        try {
            // Insert the reservation data into the database
            const result = await db.query('INSERT INTO reservations SET ?', reservationData);

            // Return the newly created reservation
            return {
                id: result.insertId,
                ...reservationData
            };
        } catch (error) {
            // Handle any errors that occur during the creation process
            console.error('Error creating reservation:', error);
            throw new Error('Failed to create reservation');
        }
    }
    // Add other methods as needed
}

module.exports = Reservation;