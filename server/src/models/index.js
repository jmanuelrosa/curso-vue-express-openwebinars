import db from '../database'

import RecipeSchema from './recipes'

export const Recipe = () =>
  db.connection().model('Recipe', RecipeSchema)
