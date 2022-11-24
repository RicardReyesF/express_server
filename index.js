const express = require('express');
const cors = require("cors");
const initialRoute = require("./routes/index");
const server  = express();

server.use(express.json())
server.use(cors())

server.use('/gif',initialRoute)

const router  = express.Router();

server.listen(3000,console.log("Conectado"))
