const { db } = require("../database/db")


function updateTeam(req,res){
    const idExist = db.find( team => 
        team.id === Number(req.params.id)    
    )
    if (!idExist) {
        res.json({
            error: "No se encuentra el id"
        })
    }
    idExist.nombre = req.body.nombre ||idExist.nombre
    idExist.apodo = req.body.apodo ||idExist.apodo
    idExist.colores = req.body.colores ||idExist.colores

    res.json({
        sucess: "Se actualizo correctamente",
        team: idExist
    })
}

module.exports ={
    updateTeam
}