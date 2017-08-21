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
    newUser.userName = req.body.userName
    newUser.firstName = req.body.firstName
    newUser.lastName = req.body.lastName
    newUser.email = req.body.email
    newUser.pet = req.body.pet

    newUser.save().then( (user) => {
        res.json(user);
    }).catch( (err) => {
        console.log(err);
    })
})

router.put('/', (req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body).then( (user) => {
            console.log('edit success');
        })
        .catch( (err) => {
            console.log(err);
        })
});

router.get('/delete/:userId', (req, res) => {
    User.findByIdAndRemove(req.params.userId).then( (user) => {
            console.log(`${user.userName} was deleted`)
        })
        .catch( (err) => {
            console.log(err);
        })
});

module.exports = router;