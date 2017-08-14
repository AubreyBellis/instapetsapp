var express = require('express');
var router = express.Router();
var Post = require ('../models/Post')
var User = require('../models/UserProfile');
var AddNewPost = ('./AddNewPost');
// var Item = require('../models/Item')
// var Comment = require('../models/comment');

router.get("/", (req, res) => {
  Post.find().then((posts) => {
    res.json(posts);
  });
});

router.post("/", (req, res) => {
  const AddnewPost = new Post();
  console.log(req.body);
  newPost.image = req.body.post.image;
  
  const newImage = req.body.post.newImage.map((image) => {
    return new Post(image);
  });

  newPost.image = newImage;

  newPost.save().then((post) => {
    res.json(post);
  }).catch(err => console.log(err));
})

module.exports = router;
