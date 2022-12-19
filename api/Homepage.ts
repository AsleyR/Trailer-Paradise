import express from 'express'
import path from 'path'
const router = express.Router()
require("dotenv").config()

const isProduction: string | undefined = process.env.IS_IN_PRODUCTION

// Check current enviroment
let currentDir: string = ''
if (isProduction === "true") {
    currentDir = "../../public"
} else if (isProduction === "false") {
    currentDir = "../public"
}

const publicDirPath = path.join(__dirname, currentDir)

// Homepage routing
router.use('/', express.static(publicDirPath))
console.log(publicDirPath)


module.exports = router;