const express = require('express');
const Pet = require('../models/pet');

const router = express.Router();

router.get('/', (req, res) => {
    Pet.find().then( (pets) => {
        res.json(pets);
    })
    .catch( (err) => {
        console.log(err);
    })
});

router.get('/:petId', (req, res) => {
    Pet.findById(req.params.petId).then( (pet) => {
        res.json(pet);
    })
    .catch( (err) => {
        console.log(err);
    })
});

router.post('/', (req, res) => {
    const newPet = new Pet();
    newPet.petname = req.body.petname
    newPet.image = req.body.image
    newPet.description = req.body.description

    newPet.save().then( (pet) => {
        res.json(pet);
    }).catch( (err) => {
        console.log(err);
    })
})

router.put('/', (req, res) => {
    Pet.findByIdAndUpdate(req.body._id, req.body).then( (pet) => {
            console.log('Saved Update');
        })
        .catch( (err) => {
            console.log(err);
        })
});

router.get('/delete/:petId', (req, res) => {
    Pet.findByIdAndRemove(req.params.petId).then( (pet) => {
            console.log(`${pet.petname} was deleted`)
        })
        .catch( (err) => {
            console.log(err);
        })
});


module.exports = router;