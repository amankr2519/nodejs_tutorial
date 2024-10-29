const mongoose = require('mongoose');
require('dotenv').config();

// Define the Mongodb connection URL

//const mongoURL = 'mongodb://localhost:217017/mydatabase' //Replace my database with your database_name

// const mongoURL = process.env.MONGO_DB_LOCALURL
const mongoURL = process.env.DB_URL

// Setup mongodb connection

mongoose.connect(mongoURL);


// Get the default connection
// Mongoose maintain a default connection object representing the mongodb connection 
const db = mongoose.connection;

db.on('connected',()=>{
  console.log('connected to mongodb server')
})

db.on('error',(err)=>{
  console.log('Mongodb connection Error',err);
  
})

db.on('disconnected',()=>{
  console.log('Disconnected to mongodb server');
  
})

// Export the database connection
module.exports = db ;


