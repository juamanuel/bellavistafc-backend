
const router = require('express').Router()
const {Team} = require ('../models/team')


router.post('/addteam', async(req, res) => {
    try{
        const myData = new Team(req.body)       
        console.log(`req.body => ${req.body}`)
        const doc = await myData.save()
        console.log('doc => ', doc)
        res.send('item saved to database' +doc)
    }
    catch(e){
        res.status(400).send(`unable to save to database ${e}`)
    }
})

router.get('/list', async(req,res) => {
    try{
        const doc = await Team.find()
        res.send(doc)
    }
    catch(e){
        res.status(400).send(`Error to list names ${e}`)
    }
})


module.exports = router