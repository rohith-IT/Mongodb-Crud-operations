const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const app = express()
const port = 4000
const cors = require('cors')
dotenv.config()
const Student = require('./server/router/student')
const Teacher = require('./server/router/teacher')
const Placement = require('./server/router/placement')

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

connectDB()

app.use(express.json())
app.use(cors())
app.use('/api',Student)
app.use('/api',Teacher)
app.use('/api',Placement)
