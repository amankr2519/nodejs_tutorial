const express = require('express')
const router = express.Router()

const Person = require('../models/person'); // Ensure the path and model name are correct


router.post('/',async(req,res)=>{
  try{
    // assuming the req body contain the person data 
    const data = req.body

    // create new person document using moongose model

    const newPerson = new Person(data)

    // save the person info into the database 
    const response = await newPerson.save()
    console.log('data is saved');

    res.status(200).json(response)

  }catch(err){
    console.log(err);
    res.status(500).json({error : "Internal server error"})
    
  }
})

// Get method display the data info

router.get('/',async(req,res)=>{
  try{
    const data = await Person.find()
    console.log("Data is fetched");
    res.status(200).json(data)
    
  }
  catch(err){
    console.log(err);
    res.status(500).json({error : "Internal server error"})
  }
})

router.get('/:worktype',async(req,res)=>{
  try{
    const worktype = req.params.worktype //Extract the worktype from the url parameter
    if(worktype == "chef"|| worktype == "manager"|| worktype =="waiter"){
      const response = await Person.find({work : worktype})
      console.log('responsed fetched');
      res.status(200).json(response)
    }else{
      res.status(404).json({error : "Error!"})
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error : "Error!"})
  }
})

router.put('/:id',async(req,res)=>{
  try{
    const person_id = req.params.id
    const updatePersonData = req.body

    const response = await Person.findByIdAndUpdate(person_id,updatePersonData,{
      new : true ,//return the update document
      runValidators :true , //run mongoose validation
      
    }) 
    if(!response){
      return res.status(404).json({error:"error"})
    }
    console.log('data updated');
    res.status(200).json(response)
  }catch(err){
    console.log(err);
    res.status(500).json({error:"Error"})
  }
})

router.delete('/:id', async (req, res) => {
  
    const person_id = req.params.id;
    const response = await Person.findByIdAndDelete(person_id);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log('Data Deleted');
    res.status(200).json({ message: 'Deleted' });
  
});


module.exports = router