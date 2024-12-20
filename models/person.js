const mongoose = require('mongoose')

// define the person schema 

const personSchema = new mongoose.Schema({
  name:{
    type : String,
    required : true
  },

  age:{
    type: Number,
    required : true,
  },
  work:{
    type : String,
    enum : ["chef", "waiter", "manager"],
    required : true,
    
  },
  mobile : {
    type : Number,
    required :  true
  },
  email: {
    type : String,
    unique: true ,
    required : true,
  },
  address : {
    type : String,
    required : true,
  },
  salary :{
    type : Number,
    required : true,
  }

})

// creater person model 
const Person = new mongoose.model('person',personSchema)
module.exports = Person