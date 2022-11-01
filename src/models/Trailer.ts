import mongoose from "mongoose";

interface ISchema {
    schema: {
        title: string;
        description: string;
        releaseDate: string;
        genres: string[];
        trailerUrl: string;
        coverUrl: string;
    }
}

const schema = new mongoose.Schema<ISchema['schema']>({
    title: String,
    description: String,
    releaseDate: String,
    genres: [String],
    trailerUrl: String,
    coverUrl: String
});

module.exports = mongoose.model("Trailer", schema)