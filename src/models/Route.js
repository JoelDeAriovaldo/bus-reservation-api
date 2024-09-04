const db = require('../config/database');

class Route {
    static async getByLocations(departure, arrival) {
        return db.query('SELECT * FROM Routes WHERE departure_location = ? AND arrival_location = ?', [departure, arrival]);
    }
    // Adicione outros métodos conforme necessário
}

module.exports = Route;