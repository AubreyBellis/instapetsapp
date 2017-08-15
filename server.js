require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserController = require("./controllers/user");
const UserProfileController = require("./controllers/userProfile");
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/pets


const connection = mongoose.connection;
connection.on('connected', () => {
  console.log("We're Live Hoes!");    
}); 

// If the connection throws an error
connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(express.static(__dirname + '/client/build/'));
  app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

app.use(bodyParser.json());
app.use('/api/user', UserController);
app.use('/api/userprofile', UserProfileController);





app.get('/', (req,res) => {
  res.send('hola betches!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})