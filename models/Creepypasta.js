import mongoose from 'mongoose'

const { Schema, model } = mongoose

const schema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    versionKey: false,
  }
)

export default model('Creepypasta', schema)
