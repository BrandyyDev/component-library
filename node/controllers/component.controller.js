const Event = require('../models/ComponentEvent')

exports.trackComponent = async (req, res) => {
  try {
    const { component, variant, action, timestamp } = req.body
    const event = new Event({ componentName: component, variant, action, timestamp })
    await event.save()
    res.status(201).json({ message: 'Evento registrado' })
  } catch {
    res.status(500).json({ message: 'Error al guardar' })
  }
}

exports.getStats = async (_req, res) => {
  const stats = await Event.aggregate([
    { $group: { _id: '$componentName', total: { $sum: 1 } } },
    { $sort: { total: -1 } }
  ])
  res.json(stats)
}

exports.exportData = async (_req, res) => {
  const events = await Event.find()
  res.json(events)
}
