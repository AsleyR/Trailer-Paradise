const Trailer = require("../models/Trailer")

exports.findTrailers = async (req: any, res: any) => {
    // const trailers = await Trailer.find()
    const trailers = await Trailer.aggregate([{$sample: {size: 99}}]) // Experimenting with returning the trailers objects in random order
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.status(200).send(trailers)
}

exports.createTrailer = async (req: any, res: any) => {
    const trailer = new Trailer(req.body)
    await trailer.save()
    res.status(200).send(trailer)
}

exports.findTrailerById = async (req: any, res: any) => {
    const requestId = req.params.id

    try {
        if (requestId === "random") {
            const trailer = await Trailer.aggregate([{$sample: {size: 1}}])
            res.header("Access-Control-Allow-Origin", "http://localhost:3000")
            res.status(200).send(trailer)
        } else {
            const trailer = await Trailer.findById(req.params.id)
            res.header("Access-Control-Allow-Origin", "http://localhost:3000")
            res.status(200).send(trailer)
        }
    } catch (err) {
        res.status(404).send({result: "Trailer object was not found.", error: err})
    }
}

exports.findTrailerByName = async (req: any, res: any) => {
    const requestName = req.params.name

    try {
        const trailer = await Trailer.find( { title: { $regex: `${requestName}`, $options: 'ims' } } )
        res.header("Access-Control-Allow-Origin", "http://localhost:3000")
        res.status(200).send(trailer)
    } catch (err) {
        res.status(404).send({result: "Trailer object was not found.", error: err})
    }
}