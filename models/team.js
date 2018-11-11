const mongoose  = require('mongoose')
const { v4 } = require('uuid')

const teamSchema = new mongoose.Schema({
    uuid: { type: String, default: v4 },
    teamName: { type: String, required: true, lowercase: true },
    shortTeamName: {type: String, required: true},
    logo:{type: String},
    group:{type:Number},
    competition:{
      idCompetition:{type:Number},
      competitionName:{type:String, required:true},
      currentRound:{type:Number},
      totalGroup:{type:Number}
    },
    players:{
      playerName:{type:String, required:true,lowercase:true},
      lastName:{type:String,required:true,lowercase:true},
      shirtNumber:{type:String},
      position:{type:String},
      yellowCards:{type:Number},
      redCards:{type:Number},
      goals:{type:Number}
    },
    stadistics:{
      points:{type:Number},
      extraPoints:{type:Number},
      gf:{type:Number},
      gc:{type:Number},
      win:{type:Number},
      draw:{type:Number},
      lose:{type:Number},
      diff:{type:Number}
    }
   },{
    // overrides default collection name auto created
    collection: 'teams'
  })

const Team = mongoose.model('Team', teamSchema)
module.exports = { Team }