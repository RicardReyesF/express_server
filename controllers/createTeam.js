const { db } = require("../database/db"); 
const { generateID } = require("../utils/generateID")

const idGenerate = generateID() 
function createTeam(req,res){
    const { nombre, apodo, colores} = req.body

    if (!nombre || !apodo || !colores) {
        res.json({
            error: "Para insertar datos se requieren de mas valores"
        })
    }
    const newTeam = {
        ...req.body,
        id: idGenerate.next().value
        
    }
    db.push(newTeam);
    res.json(newTeam);


}

module.exports = {
    createTeam
}