import express from "express"
const router = express.Router()
require("dotenv").config()

// Import Trailer controller
const trailerController = require('./controllers/Trailers')

router.get('/', trailerController.findTrailers)

router.get('/:name', trailerController.findTrailerByName)

router.post('/', trailerController.createTrailer)

module.exports = router;