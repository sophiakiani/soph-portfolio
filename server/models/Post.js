const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;