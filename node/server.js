const mongoose = require('mongoose')
require("dotenv").config();
const app = require('./app')

const DB_URI = process.env.MONGO_URI_SERVER

const PORT = process.env.PORT || 3001

mongoose.connect(DB_URI)
  .then(() => {
    console.log('✅ DB conectada')
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en ${PORT}`)
    })
  })
  .catch(err => console.error('Error de conexión:', err))
