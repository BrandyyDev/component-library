const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

exports.generateToken = (uid) => jwt.sign({ uid }, secret, { expiresIn: '1h' })
exports.verifyToken = (token) => jwt.verify(token, secret)

