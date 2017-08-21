require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user');
var Pet = require('../models/pet');
var Party = require('../models/party');


mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
Party.remove({}, (err) => console.log(err));
Pet.remove({}, (err) => console.log(err));





// creating users

const user1 = new User({
  userName: 'aubs',
  firstName: 'Aubrey',
  lastName: 'Ellis',
  email: 'aubreyb@gmail.com',
  bio: 'I am here to bring the cheese.',
  savedParties: []
});
 

const user2 = new User({
  userName: 'jMatt',
  firstName: 'Jessica',
  lastName: 'Matty',
  email: 'Jmatt@gmail.com',
  bio: 'I am here to bring the cheese.',
  savedParties: []
});

//creating pets
const reese = new Pet({
 petName:"Reese",
  image:"http://i.imgur.com/C4uNhxa.jpg",
  description:"Little bae cooling off."
});
const piper = new Pet({
 petnName:"Piper",
  image:"http://i.imgur.com/C4uNhxa.jpg",
  description:"Smarty pants"
 });
 const maddie = new Pet({
  petnName:"Maddie",
   image:"http://i.imgur.com/C4uNhxa.jpg",
   description:"Boxin' my way to the top"
  });
//creating pet party

const party = new Party({ 
  partyName: 'PupProwlers',
  description: 'Here to become the best that no one ever was.',
  pets: [reese,piper]
});







user1.save(function(err) {
  if (err) console.log(err);

  console.log('aubrey');
});
user2.save(function(err) {
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
maddie.save(function(err){
  if (err) console.log(err);

  console.log('maddie');
})
party.save(function(err){
  if (err) console.log(err);

  console.log('party');
})


mongoose.connection.close();