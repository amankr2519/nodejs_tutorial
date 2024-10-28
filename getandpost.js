app.get('/chinese',function(req,res){
  res.send("kya aap Maggie khana chayenge")
})

app.get('/idli',function(req,res){
  var customized_idli = {
    name : "rava idli",
    size : '10cm',
    is_shambar : true,
    is_chutney : false,
  }
  res.send(customized_idli)
})

// app.post('/person',function(req,res){
//   res.send("Your Data is saved")
// })


app.post('/person',(req,res)=>{

  const data = req.body //Assuming the request contains  the person data
  
  // create  a new person document using the mongoose model
  const newPerson = new person(data)

  // save new person to the database
  

  // ---->old method
  //newPerson.name = data.name 
  // newPerson.age = data.age
  // newPerson.mobile = data.mobile
  // newPerson.email = data.email 
  // newPerson.address = data.address

})