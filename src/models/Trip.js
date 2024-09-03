const db = require('../config/dbConfig');

class Trip {
    static async getAvailableTrips(routeId, date) {
        return db.query('SELECT * FROM Trips WHERE route_id = ? AND DATE(departure_time) = ?', [routeId, date]);
    }
    // Adicione outros métodos conforme necessário
}

module.exports = Trip;