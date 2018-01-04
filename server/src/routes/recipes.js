import express from 'express'

import RecipesController from '../controllers/recipes'

const router = express.Router()

router.route('/')
  .get(RecipesController.recipe)
  .post(RecipesController.addRecipe)

router.route('/:id')
  .get(RecipesController.recipeById)
  .put(RecipesController.editRecipeById)

export default router
