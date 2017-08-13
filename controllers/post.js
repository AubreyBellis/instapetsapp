var express = require('express');
var router = express.Router();
var Post = require ('../models/Post')
var User = require('../models/User');
// var Item = require('../models/Item')
// var Comment = require('../models/comment');

router.get("/:id", (req, res) => {
    User.find().then((post) => {
      res.json(posts);
    });
  });
  module.exports = router;