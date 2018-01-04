import express from 'express'

import RecipesController from '../controllers/recipes'

const router = express.Router()

router.route('/')
  .get(RecipesController.recipe)

router.route('/:id')
  .get(RecipesController.recipeById)

export default router
