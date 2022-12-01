import express from "express"
import path from 'path'
const router = express.Router()
const {mongoose} = require("mongoose")
require("dotenv").config()

// Import Trailer controller
const trailerController = require('./controllers/Trailers')

router.get('/:id', trailerController.findTrailerById)

module.exports = router;