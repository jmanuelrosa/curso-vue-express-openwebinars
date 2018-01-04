import mongoose from 'mongoose'

const RecipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: Array, trim: true, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, required: true },
    persons: { type: Number, required: true },
    time: { type: Number, required: true }
  },
  {
    strict: false
  }
)

// Static methods
RecipeSchema.statics.getById = function (id) {
  return this.findOne({ _id: id })
    .lean()
    .exec()
}

RecipeSchema.statics.getAll = function () {
  return this.find()
    .sort({ title: 'asc' })
    .exec()
}

export default RecipeSchema
