import express from 'express'

import { auth } from '../middlewares'
import RecipesController from '../controllers/recipes'

const router = express.Router()

router.use(auth)

router.route('/')
  .get(RecipesController.recipes)
  .post(RecipesController.addRecipe)

router.route('/:id')
  .get(RecipesController.recipeById)
  .put(RecipesController.editRecipeById)

export default router
