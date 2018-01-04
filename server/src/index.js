import express from 'express'

let _server

const server = {
  start() {
    const app = express()

    _server = app.listen('9000', () => {
      const address = _server.address()
      const host = address.address === '::'
        ? 'localhost'
        : address

      const port = '9000'

      console.log(`Server opened listen on http://${host}:${port}`)
    })

    return _server
  },
  close() {
    _server.close()
  }
}

export default server

if (!module.parent) {
  server.start()
}

process.on('unhandledRejection', (err, p) => {
  console.log('Custom Error: An unhandledRejection occurred')
  console.log(`Custom Error: Rejection: ${err}`)
})
