
const express = require('express');
const Party = require('../models/party');
const Pet = require('../models/pet');
const router = express.Router();

router.get('/', (req, res) => {
    Party.find().then( (parties) => {
        res.json(parties);
    })
    .catch( (err) => {
        console.log(err);
    })
});

router.get('/:partyId', (req, res) => {
    Party.findById(req.params.partyId).then( (party) => {
        res.json(party);
    })
    .catch( (err) => {
        console.log(err);
    })
});

router.post('/', (req, res) => {
    const newParty = new Party();
    newParty.partyName = req.body.partyName
    newParty.description = req.body.description
    newParty.pet = req.body.pet

    const newPet = req.body.pets.map( (pet) => {
        return new Pet(pet);
    })

    newParty.pet = newPet;

    newParty.save().then( (party) => {
        res.json(party);
    }).catch( (err) => {
        console.log(err);
    })
})

router.put('/', (req, res) => {
    Party.findByIdAndUpdate(req.body._id, req.body).then( (party) => {
            console.log('Got it saved!');
        })
        .catch( (err) => {
            console.log(err);
        })
});

router.get('/delete/:partyId', (req, res) => {
    Party.findByIdAndRemove(req.params.partyId).then( (party) => {
            console.log(`${party.partyName} was deleted`)
        })
        .catch( (err) => {
            console.log(err);
        })
});

module.exports = router;