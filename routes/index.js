const express = require("express");

const { getAll }     = require("../controllers/getAll");
const { createTeam } = require("../controllers/createTeam");
const { updateTeam } = require("../controllers/updateTeam");
const { deleteTeam } = require("../controllers/deleteTeam");

const route = express.Router();
//C
route.post("/create",createTeam);
//R
route.get("/",getAll);
//U
route.put("/update/:id", updateTeam);
//D
route.delete("/delete",deleteTeam)

module.exports = route;




