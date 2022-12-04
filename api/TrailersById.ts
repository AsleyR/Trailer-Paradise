import express from "express"
const router = express.Router()
require("dotenv").config()

// Import Trailer controller
const trailerController = require('./controllers/Trailers')

router.get('/:id', trailerController.findTrailerById)

module.exports = router;