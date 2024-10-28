const mongoose = require('mongoose')

// def the schema 

const menuSchema = new mongoose.Schema({
  name:{
    type : String,
    required : true,
  },
  price:{
    type : Number,
    required : true,
  },
  taste:{
    type: String,
    enum : ["sweet","sour","spicy"],

  },
  ingredients:{
    type: [String],
    default:[]
  },
  
})

const menu = new mongoose.model('menu',menuSchema)
module.exports = menu
