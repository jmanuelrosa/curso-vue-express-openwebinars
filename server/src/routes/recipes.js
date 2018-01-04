import express from 'express'

const router = express.Router()

router
  .get('/', (req, res, next) => {
    res
      .status(200)
      .json({ key: 'value' })
  })

router
  .get('/:id', (req, res, next) => {
    res
      .status(200)
      .json({ id: req.params.id })
  })

export default router
