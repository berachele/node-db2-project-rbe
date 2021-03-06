const express = require('express')
const helmet = require('helmet')

const carsRouter = require('../cars/car-router')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({api: "Successfully compiled!"})
})

server.use('/api/cars', carsRouter)

module.exports = server