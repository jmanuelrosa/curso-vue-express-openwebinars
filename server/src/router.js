import recipes from './routes/recipes'
import auth from './routes/auth'

export default app => {
  app.use('/recipes', recipes)
  app.use('/auth', auth)
}
