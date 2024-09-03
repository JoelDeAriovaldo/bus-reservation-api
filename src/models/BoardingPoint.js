const db = require('../config/dbConfig');

class BoardingPoint {
    static async getByRouteId(routeId) {
        return db.query('SELECT * FROM BoardingPoints WHERE route_id = ?', [routeId]);
    }
    // Adicione outros métodos conforme necessário
}

module.exports = BoardingPoint