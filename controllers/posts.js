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
      desription: req.body.desription,
      destination: req.body.destination,
    });
    console.log(post);
    // 2. send a response to frontend - typically we send back the newly created order, or all the list of orders, or just an 'ok'
    res.status(200).json("ok");
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deletePost(req, res) {
    const post = Post.findById(req.params.postId, function (err, post) {
    if (post === -1) return res.send("404: Meal not found");
    await let removedPost = post.splice(idx, 1);
    post.save(function (err, post) {
    return res.redirect(`/`)})})}


module.exports = {
  create,
  index,
  deletePost, 
};
