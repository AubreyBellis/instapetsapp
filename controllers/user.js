const express = require('express');
const Pet = require('../models/pet');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {
    User.find().then( (users) => {
        res.json(users);
    })
    .catch( (err) => {
        console.log(err);
    })
});

router.get('/:userId', (req, res) => {
    User.findById(req.params.userId).then( (user) => {
        res.json(user);
    })
    .catch( (err) => {
        console.log(err);
    })
});

router.post('/', (req, res) => {
    const newUser = new User();
    newUser.username = req.body.username
    newUser.pet = req.body.pet
    newUser.bio = req.body.bio
    newUser.save().then( (user) => {
        res.json(user);
    }).catch( (err) => {
        console.log(err);
    })
})

router.put('/', (req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body).then( (user) => {
            console.log('Saved update');
        })
        .catch( (err) => {
            console.log(err);
        })
});



router.get('/delete/:userId', (req, res) => {
    User.findByIdAndRemove(req.params.userId).then( (user) => {
            console.log(`${user.username} was deleted`)
        })
        .catch( (err) => {
            console.log(err);
        })
});

module.exports = router;