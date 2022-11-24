const  axios  = require("axios")
const apiKey = 'MuyElJ7uwfh22nyEDBMOpfUDkNScPLLJ';
async function getAll(req,res){
    const resp = await axios(`https://anime-facts-rest-api.herokuapp.com/api/v1`)
    
    const data = resp.data.data.map( (d) => {
        return res.json({
            title: d.anime_name
        } 

    )})
}

module.exports= {
    getAll
}
