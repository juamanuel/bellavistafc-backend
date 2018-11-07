const mongoose  = require('mongoose')
const { v4 } = require('uuid')

const teamSchema = new mongoose.Schema({
    uuid: { type: String, default: v4 },
    name: { type: String, required: true },
    shortName: {type: String, required: true},
   },{
    // overrides default collection name auto created
    collection: 'teams'
  })

const Team = mongoose.model('Team', teamSchema)
module.exports = { Team }