import mongoose from "mongoose";

const Schema = mongoose.Schema

const mainpostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const mainpostModel = mongoose.model('Mainpost', mainpostSchema)