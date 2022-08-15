const { imageListClasses } = require("@mui/material");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema(
  {
    board_name: String,
    Pictures: Object,
    Videos: Object,
    Routes: Object,
    Restaurants: Object,
    Hotels: Object,
    Destinations: Object,
    Transportation: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", boardSchema);
