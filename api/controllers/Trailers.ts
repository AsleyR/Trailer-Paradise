import { Request, Response} from 'express'
import dotenv from 'dotenv'
const Trailer = require("../models/Trailer")

// Config .env variables
dotenv.config()
const FRONTEND_CONNECTION = process.env.FRONTEND_URL_CONNECTION

exports.findTrailers = async (req: Request, res: Response) => {
    // const trailers = await Trailer.find()
    const trailers = await Trailer.aggregate([{$sample: {size: 99}}]) // Experimenting with returning trailers objects in a semi-random order
    res.header("Access-Control-Allow-Origin", `${FRONTEND_CONNECTION}`)
    res.status(200).send(trailers)
}

exports.createTrailer = async (req: Request, res: Response) => {
    const trailer = new Trailer(req.body)
    await trailer.save()
    res.header("Access-Control-Allow-Origin", `${FRONTEND_CONNECTION}`)
    res.status(200).send(trailer)
}

exports.findTrailerById = async (req: Request, res: Response) => {
    const requestId = req.params.id

    try {
        if (requestId === "random") {
            const trailer = await Trailer.aggregate([{$sample: {size: 1}}])
            res.header("Access-Control-Allow-Origin", `${FRONTEND_CONNECTION}`)
            res.status(200).send(trailer)
        } else {
            const trailer = await Trailer.findById(req.params.id)
            res.header("Access-Control-Allow-Origin", `${FRONTEND_CONNECTION}`)
            res.status(200).send(trailer)
        }
    } catch (err) {
        res.status(404).send({result: "Trailer object was not found.", error: err})
    }
}

exports.findTrailerByName = async (req: Request, res: Response) => {
    const requestName = req.params.name

    try {
        const trailer = await Trailer.find( { title: { $regex: `${requestName}`, $options: 'ims' } } )
        res.header("Access-Control-Allow-Origin", `${FRONTEND_CONNECTION}`)
        res.status(200).send(trailer)
    } catch (err) {
        res.status(404).send({result: "Trailer object was not found.", error: err})
    }
}