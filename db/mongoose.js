const mongoose  = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/Bellavistafc', { useNewUrlParser: true })
try{
    console.log("Connected to Database")
}
catch(e){
    console.log("ERROR in the conection to Database" + e)
}

module.exports = { mongoose }