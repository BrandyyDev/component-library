const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth.routes')
const componentRoutes = require('./routes/component.routes')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (_, res) => res.json({ status: 'ok' }))

app.use('/api/auth', authRoutes)
app.use('/api/components', componentRoutes)

module.exports = app
