const express = require('express')
const { trackComponent, getStats, exportData } = require('../controllers/component.controller')
const { requireAuth } = require('../middlewares/auth.middleware')
const router = express.Router()

router.post('/track', trackComponent)
router.get('/stats', getStats)
router.get('/export', requireAuth, exportData)

module.exports = router
