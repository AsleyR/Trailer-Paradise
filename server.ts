import express from 'express';
const {mongoose} = require("mongoose")
require("dotenv").config()

// Import Trailer controller
const trailerController = require('./src/controllers/Trailers')

// MongoDB Atlas Uri
const uri = process.env.MONGODB_CONNECTION_STRING

// Local DB, for debugging only
const localDB = "mongodb://localhost:27017/trailer-paradise"

mongoose.connect(uri, { useNewUrlParser: true, 
  useUnifiedTopology: true})
.then(() => {
  
  // Initialize the Engine engine
  const app: express.Application = express();

  // Initialize middleware
  app.use(express.json())

  // Setup Port 4000 for the server to run
  const PORT: string = process.env.PORT || '4000';

  // Basic Handling of server homepage
  // Returns html file with Css styles
  app.use(express.static("public"));

  // API handling
  app.get('/api', (req, res) => {
      res.status(200).send("API Section")
  })

  // Trailer list API
  // Return list of all trailers
  app.get('/api/trailers/', trailerController.findTrailers)

  // Add a new trailer object to the database
  app.post('/api/trailers/', trailerController.createTrailer)

  // Find specific trailer object
  app.get('/api/trailers/:id', trailerController.findTrailer)

  // Server setup
  app.listen(PORT, () => {
      console.log(`TypeScript Express server started at: http://localhost:${PORT}`)
  })

}).catch((err: any) => {
  console.log({error: err})
  console.log("Database connection Failed, stopping server...")
})

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully.")
})