import express from 'express'
import Creepypasta from '../models/Creepypasta.js'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const creepypastas = await Creepypasta.find()
    res.json(creepypastas)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const creepypasta = await Creepypasta.findById(id)
    res.json(creepypasta)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const creepypasta = await Creepypasta.create(req.body)
    res.json(creepypasta)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    await Creepypasta.findByIdAndUpdate(id, req.body)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const creepypasta = await Creepypasta.findByIdAndDelete(id)
    if (creepypasta) {
      res.sendStatus(200)
    } else {
      res.sendStatus(400)
    }
  } catch (error) {
    next(error)
  }
})

export default router
