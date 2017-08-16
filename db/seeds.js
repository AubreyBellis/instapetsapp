require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user');
var Pet = require('../models/pet');
var Description = require('../models/description');


mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
Pet.remove({}, (err) => console.log(err));





// creating users
const aubrey = new User({
  username: 'Aubrey',
 pet:"German Shepherd Dog",
 bio:"warehtjoesdhgjsdg"
 
});
const jessica = new User({
  username: "J",
  pet:"Hound",
  bio:"sjfhksjdfhkjdsfh"
});
//creating pet
const reese = new Pet({
 petname:"Reese",
  image:("http://i.imgur.com/C4uNhxa.jpg"),
  description:"Little bae cooling off."
});
const piper = new Pet({
 petname:"Piper",
  image:("http://i.imgur.com/C4uNhxa.jpg"),
  description:"Smarty pants"
 });







aubrey.save(function(err) {
  if (err) console.log(err);

  console.log('aubrey');
});
jessica.save(function(err) {
  if (err) console.log(err);
  
  console.log('j');
});

reese.save(function(err) {
  if (err) console.log(err);

  console.log('reese');
});
piper.save(function(err){
  if (err) console.log(err);

  console.log('piper');
})


mongoose.connection.close();