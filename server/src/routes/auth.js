import express from 'express'

import AuthController from '../controllers/Auth'

const router = express.Router()

router.route('/')
  .post(AuthController.token)

export default router
