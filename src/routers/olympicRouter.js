const express = require('express');
const Rank = require('../models/olympicRace');

// 1. Create a new Router
const router = new express.Router();

//2. We need to define router


router.get('/', (req,res) => {
    res.send("Homepage")
})


router.get('/ranking', async (req,res) => {
    try {
       const getPerson = await Rank.find().sort({rank : 1})
        res.status(201).send(getPerson);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/ranking', async (req,res) => {
    try {
        const postPerson = new Rank(req.body);
        const createPerson = await postPerson.save();
        res.status(201).send(createPerson);
    } catch (error) {
        res.status(400).send(error);
    }
});


//get individual person
router.get('/ranking/:id', async (req,res) => {
    try {
        const _id = req.params.id;
        const readPerson = await Rank.findById(_id);
        // console.log(readUser)
        if(!readPerson){
            return res.status(404).send();
        }
        else{
            return res.status(200).send(readPerson)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})


//update ranking by id
router.patch('/ranking/:rank', async (req,res) => {
    try {
        const rank = req.params.rank;
        const updateRank = await Student.findOneAndUpdate(rank, req.body, {new :true});
        // console.log(updateStudent)
        res.send(updateRank);
    } catch (error) {
        res.status(404).send(error);
    }
});

//delete student record
router.delete('/ranking/:id', async (req,res) => {
    try {
        const _id = req.params.id;
        const deletePerson = await Rank.findByIdAndDelete(_id);
        if(!_id){
            return res.status(400).send()
        }
        else{
            res.send(deletePerson);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router;