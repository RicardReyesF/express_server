function* generateID(){
    let id=1;
    while(true){
        yield id
        id++
    }
}

module.exports = {
    generateID
}