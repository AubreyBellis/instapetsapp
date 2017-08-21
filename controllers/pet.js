const express = require('express');
const User = require('../models/user');
const Pet = require('../models/pet');
const router = express.Router();

router.get('/:userId', (req, res) => {
    User.findById(req.params.userId).then( (user) => {
        res.json(user);
    })
    .catch( (err) => {
        console.log(err);
    })
});

module.exports = router;