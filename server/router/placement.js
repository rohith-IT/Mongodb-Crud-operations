const express = require('express')
const router = express.Router()

const{createPlacement,getPlacement,updatePlacement}= require('../controller/placement')

router.post('/placement', createPlacement)
router.get('/placement', getPlacement)
router.put('/placement/:id', updatePlacement)
module.exports = router;