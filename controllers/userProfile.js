const express = require('express');
const User = require("../models/user");

const router = express.Router();
// var Comment = require('../models/Usercomment');

router.get("/", (req, res) => {
    UserProfile.find().then((users) => {
      res.json(users);
    });
  });



  router.get("/:id", (req, res) => {
    UserProfile.findById(req.params.id).then((usersProfile) => {
      res.json(usersProfile);
    })
  })

module.exports