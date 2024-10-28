const express = require('express')
const app = express()

const db = require('./db')




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



app.listen((3000),()=>{
  console.log("Server is live");
  

})