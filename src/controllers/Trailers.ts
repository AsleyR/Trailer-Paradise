const Trailer = require("../models/Trailer")

exports.findTrailers = async (req: any, res: any) => {
    const trailers = await Trailer.find()
    res.status(200).send(trailers)
}

exports.createTrailer = async (req: any, res: any) => {
    const trailer = new Trailer(req.body)
    await trailer.save()
    res.status(200).send(trailer).catch(console.log("error creating trailer object"))
}

exports.findTrailer = async (req: any, res: any) => {
    const requestId = req.params.id

    try {
        if (requestId === "random") {
        const trailer = await Trailer.aggregate([{$sample: {size: 1}}])
        res.status(200).send(trailer)
        } else {
            const trailer = await Trailer.findById(req.params.id)
            res.status(200).send(trailer)
        }
    } catch (err) {
        res.status(404).send({result: "Trailer object was not found.", error: err})
    }
}

// exports.findRandomTrailer = async (req: any, res: any) => {
//     const trailer = await Trailer.
// }