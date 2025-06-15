const { generateToken } = require('../utils/jwt')

const fakeUser = { email: 'admin@demo.com', password: '1234' }

exports.register = (req, res) => {
  res.status(201).json({ message: 'Registro simulado' })
}

exports.login = (req, res) => {
  const { email, password } = req.body
  if (email === fakeUser.email && password === fakeUser.password) {
    const token = generateToken(email)
    return res.json({ token })
  }
  res.status(401).json({ message: 'Credenciales inválidas' })
}
