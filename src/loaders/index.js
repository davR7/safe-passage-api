const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

module.exports = app => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(helmet())
    app.use(cors())
}