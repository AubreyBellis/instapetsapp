
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



//   newUser.save().then((category) => {
//     res.json(category);
//   }).catch(err => console.log(err));
// })

module.exports = router;