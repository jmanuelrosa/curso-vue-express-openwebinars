import jwt from 'jwt-simple'

class AuthController {
  token (req, res, next) {
    console.log(req.body.email)
    if (!req.body.email) {
      return res
        .status(401)
        .send({ error: 'Need an email' })
    }

    const payload = {
      email: req.params.email
    }

    return res
      .status(200)
      .send({ token: jwt.encode(payload, req.app.locals.config.TOKEN) })
  }
}

export default new AuthController()
