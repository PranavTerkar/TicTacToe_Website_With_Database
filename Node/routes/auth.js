const express = require("express")
const router = express.Router()

const AuthController = require('../Controler/user')

router.post('/register', AuthController.register)

module.exports = router