const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipeName: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: false
    },
    prepTime: {
      type: String,
      required: false
    },
    cookTime: {
      type: String,
      required: false
    },
    servings: {
      type: Number,
      required: true
    },
    ingredients: {
      type: String,
      required: true
    },
    directions: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: 'anonymous'  }
},
{
timestamps: true
})

module.exports = mongoose.model('Message', messageSchema)
