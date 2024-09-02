const db = require('../config/database');

const UserModel = {
    async create(userData) {
        const [result] = await db.execute(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [userData.username, userData.email, userData.password]
        );
        return result.insertId;
    },

    async findByUsernameOrEmail(identifier) {
        const [rows] = await db.execute(
            'SELECT * FROM users WHERE email = ? OR username = ?',
            [identifier, identifier]
        );
        return rows[0];
    },

    // Adicione outros métodos conforme necessário
};

module.exports = UserModel;