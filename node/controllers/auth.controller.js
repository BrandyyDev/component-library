const bcrypt = require('bcrypt')
const User = require('../models/users')
const { generateToken } = require('../utils/jwt')

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body


    const exists = await User.findOne({ email })
    if (exists) return res.status(400).json({ message: 'Correo ya registrado' })

    // Hashear y guardar
    const hashed = await bcrypt.hash(password, 10)
    const newUser = new User({ email, password: hashed })
    await newUser.save()

    res.status(201).json({ message: 'Usuario creado con éxito' })
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar', error: err.message })
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Usuario no encontrado' })

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) return res.status(401).json({ message: 'Contraseña incorrecta' })

    const token = generateToken(user._id)
    res.json({ token })
  } catch (err) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: err.message })
  }
}
