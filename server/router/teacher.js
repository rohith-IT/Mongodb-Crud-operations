const express=require('express')
const router= express.Router()

const {createTeacher,getTeacher,updateTeacher,deleteTeacher,getOneTeacher} = require('../controller/teacher')

router.post('/Teacher',createTeacher)

router.get('/Teacher',getTeacher)

router.get('/Teacher/:id',getOneTeacher)

router.put('/Teacher/:id',updateTeacher)

router.delete('/Teacher/:id',deleteTeacher)


module.exports = router;