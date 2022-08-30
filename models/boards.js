const { imageListClasses } = require("@mui/material");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema(
  {
    id: Number,
    title: String,
    description: String,
    // posts: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Board", boardSchema);
