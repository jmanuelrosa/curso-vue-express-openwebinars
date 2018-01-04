import recipes from './routes/recipes'

export default app => {
  app.use('/recipes', recipes)
}
