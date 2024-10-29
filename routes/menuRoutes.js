const express = require('express')
const router = express.Router()

const menuItems = require('../models/menu')


// post method for menu

router.post('/menu',async(req,res)=>{
  try{
  const data = req.body 

  const newMenu = await menuItems(data)
  
  const response = newMenu.save()
  console.log('data saved')
  res.status(200).json(response)
  }
  catch(err){
    console.log(err);
    res.status(500).json({error : "internal error"})
    
  }
})

router.get('/menu',async(req,res)=>{
  try{
    const data = await menuItems.find()
    console.log("data is fetched");
    res.status(200).json(data)
  }catch(err){
    console.log(err);
    res.status(500).json({error:"Error!"})
  }
})

router.put('/menu/:id',async(req,res)=>{
  try{
    const menu_id = req.params.id 

    const updatePersonData = req.body

    const response = await menuItems.findByIdAndUpdate(menu_id,updatePersonData,{
      new : true,
      newValidators : true,
    })
    if(!response){
      return res.status(404).json({message : 'id not found'})
    }
    console.log('data updated');
    res.status(200).json(response)

  }catch(error){
    console.log(error);
    return res.status(500).json({message : 'error'})
  }
})

router.delete('/menu/:id', async (req, res) => {
  
  const memu_id = req.params.id;
  const response = await menuItems.findByIdAndDelete(memu_id);

  if (!response) {
    return res.status(404).json({ error: "Person not found" });
  }

  console.log('Data Deleted');
  res.status(200).json({ message: 'Deleted' });

});

module.exports = router