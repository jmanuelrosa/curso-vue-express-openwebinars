import jwt from 'jwt-simple'

export default (req, res, next) => {
  if (!req.headers.authorization || req.headers.authorization === 'null') {
    return res
      .status(401)
      .send({ message: 'No authenticate' })
  }

  const token = req.headers.authorization.split(' ')[1]
  const payload = jwt.decode(token, req.app.locals.config.TOKEN)

  req.user = payload.email

  next()
}
