import mongoose from 'mongoose'

const Schema = mongoose.Schema

const menspostSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

export const menspostModel = mongoose.model('Menspost', menspostSchema) 