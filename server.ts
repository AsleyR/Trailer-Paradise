import express from "express"
import path from 'path'
const {mongoose} = require("mongoose")
require("dotenv").config()

// Import API Handlers
const allTrailers = require('./api/AllTrailers')
const trailersById = require('./api/TrailersById')

// Import Trailer controller
// const trailerController = require('./api/controllers/Trailers')

// MongoDB Atlas Uri
const uri = process.env.MONGODB_CONNECTION_STRING

// Local DB, for debugging only
const localDB = "mongodb://localhost:27017/trailer-paradise"

mongoose.connect(uri, { useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {

  // Initialize the Engine engine
  const app: express.Application = express();

  // Initialize middleware
  app.use(express.json())

  // Setup Port 4000 for the server to run
  const PORT: string = process.env.PORT || '4000';

  app.use(express.static(path.join(__dirname, "./public/")))
  // app.get('/', (req, res) => {
  //   res.json({
  //     hello: 'hi'
  //   })
  // })

  app.use('/api/trailers', allTrailers)
  app.use('/api/trailers/id/', trailersById)


  // Server setup
  app.listen(PORT, () => {
      console.log(`TypeScript Express server started at: http://localhost:${PORT}`)
  })
}).catch((err: any) => {
  console.log({error: err})
  console.log("Database connection FAILED, stopping server...")
})

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established SUCCESFULLY.")
})