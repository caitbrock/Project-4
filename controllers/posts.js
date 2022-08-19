const User = require("../models/user");
const Post = require("../models/posts");

async function index(req, res) {
  let posts = await Post.find({}).sort({ createdAt: "desc" });
  res.status(200).json(posts);
}

async function create(req, res) {
  try {
    // 1. put the order in the database (the data will be incoming via `req.body`)
    const post = await Post.create({
      title: req.body.title,
      description: req.body.description,
      destination: req.body.destination,
      tags: req.body.tags,
    });
    console.log(post);
    // 2. send a response to frontend - typically we send back the newly created order, or all the list of orders, or just an 'ok'
    res.status(200).json("ok");
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  index,
};
