const express = require('express')
const routes = require('./routes/api')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { mongoose } = require('./db/mongoose')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/',async (req, res) => {
    try{
        await res.sendFile(__dirname + '/index.html')
    }
    catch(e){
        res.status(400).send(e)
    }
})

app.use('/api',routes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
