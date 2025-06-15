const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  componentName: { type: String, required: true },
  variant: String,
  action: String,
  timestamp: { type: Date, default: Date.now },
})

module.exports = mongoose.model('ComponentEvent', eventSchema)
