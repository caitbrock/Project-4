const User = require("../models/users");
const Board = require("../models/boards");

async function postsIndex(req, res) {
  try {
    let posts = await User.find().populate().exec();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  postsIndex,
  catsIndex,
};
