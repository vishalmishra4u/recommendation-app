const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  popularityScore: { type: Number, default: 0 } // Based on user interactions
});

module.exports = mongoose.model("Book", BookSchema);
