const db = require('../config/database');

class Seat {
    static async getAvailableSeats(tripId) {
        return db.query('SELECT * FROM Seats WHERE trip_id = ? AND is_available = TRUE', [tripId]);
    }
    // Adicione outros métodos conforme necessário
}

module.exports = Seat;