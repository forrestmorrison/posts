//const jwt = require('jsonwebtoken')
const jwksRsa = require('jwks-rsa');
const jwt = require('express-jwt');

const logger = (req, res, next) => {
  console.log(`${req.path} ${new Date().toISOString()}`)
  next()
}

const authenticate = (req, res, next) => {
  const header = req.headers['authorization'] || ''
  const [ bearer, token ] = header.split(' ')

  try {
    const decoded = jwt.verify(token, 'secret')
    req.user = decoded
    next()
  } catch(err) {
    res.sendStatus(401)
  }
}

module.exports = {
  logger,
  authenticate
}