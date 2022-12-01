// *============== Import Libraries ==============*
import express from "express"
import path from 'path'
const {mongoose} = require("mongoose")
require("dotenv").config()

// *============== Import API Handlers ==============*
const allTrailers = require('./api/AllTrailers')
const trailersById = require('./api/TrailersById')

// Import Trailer controller
// const trailerController = require('./api/controllers/Trailers')

// *============== MongoDB Database ==============*

// MongoDB Atlas Uri
const uri = process.env.MONGODB_CONNECTION_STRING

// Local DB, for debugging only
const localDB = "mongodb://localhost:27017/trailer-paradise"


// *============== Connect to MongoDB database ==============*
mongoose.connect(uri, { useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {

  // Initialize the Engine engine
  const app: express.Application = express();

  // *============== Middleware ==============*
  app.use(express.json())

  // Setup Port 4000 for the server to run
  const PORT: string = process.env.PORT || '4000';

  // *============== ROUTES ==============*

  // For development purpose, use this config to server the folder 'public'
  // app.use(express.static(path.join(__dirname, "./public/")))

  // For production, use this one.
  app.use(express.static(path.join(__dirname, '../public')))

  app.use('/api/trailers', allTrailers)
  app.use('/api/trailers/id/', trailersById)


  // *============== Server setup ==============*
  app.listen(PORT, () => {
      console.log(`[Server]: TypeScript Express server started at: http://localhost:${PORT}`)
  })
}).catch((err: any) => {
  // In case server *=FAILS=* to connect to MongoDB.
  console.log({error: err})
  console.log("[Database]: Database connection *=FAILED=*, stopping server...")
})

const connection = mongoose.connection;

// In case server *=SUCCESS=* in connecting to MongoDB.
connection.once("open", () => {
  console.log("[Database]: MongoDB database connection established *=SUCCESFULLY=*.")
})