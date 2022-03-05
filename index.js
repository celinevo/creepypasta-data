import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import creepypastas from './routes/creepypastas.js'

dotenv.config()
const { MONGODB_URL = 'mongodb://localhost:2020/creepypasta-data' } =
  process.env

try {
  await mongoose.connect(MONGODB_URL)
  console.log('Connected to MongoDB.')
} catch (error) {
  console.log('ERROR: could not connect.', error.message)
}

const app = express()
const port = 5555

app.use(express.json())

app.use('/creepypastas', creepypastas)

app.use('*', (error, req, res, next) => {
  res.json(error)
})

app.listen(port, () => {
  console.log(`👏 Listening on port ${port}`)
})
