let {db} = require("../database/db");

function deleteTeam(req,res){
    const deleteId = db.find( team => {
        team.id === Number(req.body.id)
    })

    if (deleteId) {
        res.json({
            error: "No existe ningun equipo con ese ID"
        })
    }
    const filterId = db.filter( team => {
        team.id !== Number(req.body.id)
    })
    db = filterId;
    res.json({
        sucess: "Se elimino correctamente",
        team: db
    })

}

module.exports = {
    deleteTeam
}