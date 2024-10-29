const express = require('express')
const app = express()

const db = require('./db')
require('dotenv').config();



const bodyParser = require('body-parser')
app.use(bodyParser.json())



app.get('/', function (req, res) {
  res.send('Welcome to our hotel ... how can i help you ? , we have list of menus sir')
})



// Import the router files
const personRoutes = require('./routes/personRoutes')
const menuRouter = require('./routes/menuRoutes')

// Use the router
app.use('/person',personRoutes)
app.use('/',menuRouter)


const PORT = process.env.PORT || 3000;



app.listen((PORT),()=>{
  console.log("Server is live");
  

})