import express from "express"
import path from 'path'
const router = express.Router()
const {mongoose} = require("mongoose")
require("dotenv").config()

// Import Trailer controller
const trailerController = require('./controllers/Trailers')

router.get('/', trailerController.findTrailers)

router.get('/:name', trailerController.findTrailerByName)

router.post('/', trailerController.createTrailer)

module.exports = router;