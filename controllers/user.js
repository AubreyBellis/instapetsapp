
var express = require('express');
var router = express.Router();

var User = require('../models/User');
var Item = require('../models/Item')
var Comment = require('../models/comment');

router.get("/", (req, res) => {
    User.find().then((users) => {
      res.json(users);
    });
  });



  router.get("/:id", (req, res) => {
    User.findById(req.params.id).then((users) => {
      res.json(users);
    })
  })

module.exports = router;