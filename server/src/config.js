import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'

const SETTINGS = config()

export default app => {
  app.disable('x-powered-by')

  app.set('env', SETTINGS.parsed.ENV)

  app.set('config', SETTINGS.parsed)
  app.locals.env = app.get('env')
  app.locals.config = app.get('config')

  app.use(logger('combined'))

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  app.use(cors())
}
