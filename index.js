const express = require('express')
const http = require('http')
const dotenv = require('dotenv').config();
const dbconfig = require('./config');
const mongoose = require("mongoose");

const hostname = '127.0.0.1'
const port = 3000
let router = require('./router')

var app = express()
const server = http.Server(app)
app.use(router.initialize())

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})