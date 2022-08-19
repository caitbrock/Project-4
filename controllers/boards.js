const User = require("../models/user");
const Post = require("../models/posts");
const Board = require("../models/boards");

async function boardIndex(req, res) {
  let posts = await Post.find({}).sort({ createdAt: "desc" });
  res.status(200).json(posts);
}

async function addtoBoard(req, res) {
  try {
    // 1. put the order in the database (the data will be incoming via `req.body`)
    const board = await Board.create({
      title: req.body.title,
      description: req.body.description,
      destination: req.body.destination,
    });
    console.log(board);
    // 2. send a response to frontend - typically we send back the newly created order, or all the list of orders, or just an 'ok'
    res.status(200).json("ok");
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  addtoBoard,
  boardIndex,
};
