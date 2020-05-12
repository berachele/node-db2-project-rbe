const express = require('express')

const db = require('../data/dbConfig')

const router = express.Router()

router.get('/', (req, res) => {
    db("cars")
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ message: "There was an error retrieving the data"})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    db("cars").where({id}).first()
    .then(car => {
        res.status(200).json({data: car})
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({ message: "There was an error retrieving the data"})
    })
})

router.post('/', (req, res) => {
    db("cars")
    .then()
    .catch(err => {
        console.log({err})
        res.status(500).json({ message: "There was an error retrieving the data"})
    })
})

router.put('/:id', (req, res) => {
    db("cars")
    .then()
    .catch(err => {
        console.log({err})
        res.status(500).json({ message: "There was an error retrieving the data"})
    })
})

router.delete('/:id', (req, res) => {
    db("cars")
    .then()
    .catch(err => {
        console.log({err})
        res.status(500).json({ message: "There was an error retrieving the data"})
    })
})

module.exports = router