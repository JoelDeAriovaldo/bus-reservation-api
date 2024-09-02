const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AuthController = {
    async register(req, res) {
        try {
            const { username, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const userId = await UserModel.create({ username, email, password: hashedPassword });
            res.status(201).json({ message: 'Usuário registrado com sucesso', userId });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao registrar usuário', error: error.message });
        }
    },

    async login(req, res) {
        try {
            const { identifier, password } = req.body; // identifier can be either username or email
            const user = await UserModel.findByUsernameOrEmail(identifier);
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: 'Credenciais inválidas' });
            }
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'Login bem-sucedido', token });
        } catch (error) {
            res.status(500).json({ message: 'Erro durante o login', error: error.message });
        }
    },
};

module.exports = AuthController;