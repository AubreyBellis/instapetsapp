const express = require('express');
const Pet = require('../models/pet');
const Board = require('../models/board');
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
    newPet.PetName = req.body.petName
    newPet.Image = req.body.Image
    newPet.description = req.body.description

    const newBoard = req.body.board.map( (board) => {
        return new Board(board);
    })

    newPet.boards = newBoards;

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
            console.log(`${pet.petName} was deleted`)
        })
        .catch( (err) => {
            console.log(err);
        })
});


module.exports = router;