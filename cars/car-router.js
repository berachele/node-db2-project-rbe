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
    db("cars").where({id})
    .first()
    .then(car => {
        if(!car){
            res.status(400).json({error: "Car not found by that ID"})
        }else{
            res.status(200).json(car)
        }
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({ message: "There was an error retrieving the data"})
    })
})

router.post('/', (req, res) => {
    const car = req.body
    if(isValidCar(car)){
        db("cars")
        .insert(car)
        .then(newCar => {
            res.status(201).json({success: `created '${car.make} ${car.model}'`})
        })
        .catch(err => {
            console.log({err})
            res.status(500).json({ message: "There was an error retrieving the data"})
        })
    }else {
        res.status(400).json({message: "Please provide VIN, make and model of the car"})
    }
    
})

router.put('/:id', (req, res) => {
    const editCar = req.body
    const {id} = req.params
    db("cars").where({id})
    .update(editCar)
    .then(car => {
        if(car > 0){
            res.status(200).json({success: `Updated '${editCar.make} ${editCar.model}'`})
        }else{
            res.status(404).json({error: "Car not found by that ID"})
        }
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({ message: "There was an error retrieving the data"})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    db("cars").where({id})
    .del()
    .then(car => {
        if(car > 0){
            res.status(200).json({success: `Car with id: ${id} was deleted`})
        }else{
            res.status(404).json({error: "Car not found by that ID"})
        }
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({ message: "There was an error retrieving the data"})
    })
})

function isValidCar(car){
    return Boolean(car.make && car.model)
}

module.exports = router