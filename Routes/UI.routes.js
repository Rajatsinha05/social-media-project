const { Router } = require('express')
const { home, signup } = require('../Controllers/UIcontroller')
const uirouter = Router()

uirouter.get('/', home)
uirouter.get('/signup',signup)

module.exports = uirouter
