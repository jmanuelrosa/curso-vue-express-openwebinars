import { Recipe } from '../models'

class RecipesController {
  async recipes (req, res, next) {
    const data = await Recipe().getAll()

    res
      .status(200)
      .json(data)
  }

  async recipeById (req, res, next) {
    const data = await Recipe().getById(req.params.id)

    res
      .status(200)
      .json(data)
  }

  async addRecipe (req, res, next) {
    const newRecipe = Recipe()({
      title: req.body.title,
      description: req.body.description,
      persons: req.body.persons,
      time: req.body.time,
      ingredients: req.body.ingredients,
      difficulty: req.body.difficulty
    })

    const data = await newRecipe.save()

    res
      .status(201)
      .json(data)
  }

  async editRecipeById (req, res, next) {
    const newRecipe = {
      title: req.body.title,
      description: req.body.description,
      persons: req.body.persons,
      time: req.body.time,
      ingredients: req.body.ingredients,
      difficulty: req.body.difficulty
    }

    const data = await Recipe()
      .findOneAndUpdate(
        { _id: req.params.id },
      newRecipe
    )

    return res
      .status(200)
      .json(data)
  }
}

export default new RecipesController()
