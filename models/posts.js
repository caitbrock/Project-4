const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    id: Number,
    title: String,
    description: String,
    destination: String,
    images: { type: String, required: true },
    tags: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
