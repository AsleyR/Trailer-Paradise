import mongoose from "mongoose";

interface ISchema {
    schema: {
        title: string;
        description: string;
        trailerUrl: string;
        releaseDate: string;
        coverUrl: string;
    }
}

const schema = new mongoose.Schema<ISchema['schema']>({
    title: String,
    description: String,
    trailerUrl: String,
    releaseDate: String,
    coverUrl: String
});

module.exports = mongoose.model("Trailer", schema)