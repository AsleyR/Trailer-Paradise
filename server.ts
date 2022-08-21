// Import Express
import express from 'express';

// Initialize the Engine engine
const app: express.Application = express();

// Setup Port 4000 for the server to run
const PORT: string = process.env.PORT || '4000';

// Basic Handling of server home page
app.get('/', (req, res) => {
    res.send("TypeScript with Express!");
})

// Server setup
app.listen(PORT, () => {
    console.log(`TypeScript with Express server started at port: ${PORT}`)
})

