// *============== Import Libraries ==============*
import express, { Request, Response, ErrorRequestHandler } from "express"
import path from 'path'
const {mongoose} = require("mongoose")
const helmet = require('helmet')
require("dotenv").config()

// *============== Import API Handlers ==============*
const homepage = require('./api/Homepage')
const allTrailers = require('./api/AllTrailers')
const trailersById = require('./api/TrailersById')

// Import Trailer controller
// const trailerController = require('./api/controllers/Trailers')

// *============== Determine Current Enviroment ==============*
// Determine if code is in a production enviroment
const isProduction: string | undefined = process.env.IS_IN_PRODUCTION

// *============== MongoDB Database ==============*

// MongoDB Atlas Uri
const MongoDBAtlasUri: string | undefined = process.env.MONGODB_CONNECTION_STRING
// Local DB, for debugging only
const localDB = "mongodb://localhost:27017/trailer-paradise"

// Uri to connect to Mongo Database
const MongoUri = isProduction === 'true' ? MongoDBAtlasUri : localDB

// *============== Connect to MongoDB database ==============*
mongoose.connect(MongoUri, { useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {

  // Initialize the Engine engine
  const app: express.Application = express();

  // *============== Middleware ==============*
  app.use(express.json())
  app.use(helmet())

  // *============== PORT ==============*
  // Setup Port either to procress enviroment variable, or to Port 4000
  const PORT: string = process.env.PORT || '4000';

  // *============== ROUTES ==============*

  // Routes handlers
  app.use('/', homepage)
  app.use('/api/trailers', allTrailers)
  app.use('/api/trailers/id/', trailersById)

  // '/api/' route, return simple text message.
  app.use('/api/', (req: Request, res: Response) => {
    res.send("Api section.")
  })

  // // Error Handler Middleware
  // app.use((err: ErrorRequestHandler, req: Request, res: Response) => {
  //   res.send(err)
  // })


  // *============== Server setup ==============*
  app.listen(PORT, () => {
      console.log(`🛠 [Server]:TypeScript Express server started at: http://localhost:${PORT}`)
  })
}).catch((err: any) => {
  // In case server *=FAILS=* to connect to MongoDB.
  console.log({error: err})
  console.log(`❌ [Database]:Database connection ${'*=FAILED=*'}, stopping server...`)
})

const connection = mongoose.connection;

// In case server *=SUCCESS=* in connecting to MongoDB.
connection.once("open", () => {
  console.log("✅[Database]: MongoDB database connection established *=SUCCESFULLY=*.")
})