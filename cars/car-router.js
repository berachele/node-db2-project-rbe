const express = require('express')

const db = require('../data/dbConfig')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({tesing: "it's working!"})
})

router.get('/:id', (req, res) => {})

router.post('/', (req, res) => {})

router.put('/:id', (req, res) => {})

router.delete('/:id', (req, res) => {})

module.exports = router