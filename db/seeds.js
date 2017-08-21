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





// creating usersnp

const user1 = new User({
  userName: 'Aubs0128',
  firstName: 'Aubrey',
  lastName: 'Ellis',
  email: 'aubreyb@gmail.com',
  pet:'The German Shepherd Dog is a breed of medium to large-sized working dog that originated in Germany. The breed\'s officially recognized name is German Shepherd Dog in the English language (sometimes abbreviated as GSD). The breed is also known as the Alsatian in Britain and Ireland.The German Shepherd is a relatively new breed of dog, with their origin dating to 1899. As part of the Herding Group, German Shepherds are working dogs developed originally for herding sheep. Since that time however, because of their strength, intelligence, trainability, and obedience, German Shepherds around the world are often the preferred breed for many types of work, including disability assistance, search-and-rescue, police and military roles, and even acting.The German Shepherd is the second-most registered breed by the American Kennel Club and fourth-most registered breed by The Kennel Club in the United Kingdom.'
});
 

const user2 = new User({
  userName: 'JMatt1369',
  firstName: 'Jessica',
  lastName: 'Matty',
  email: 'Jmatt@gmail.com',
  pet:'The coonhound is a type of scent hound and a member of the hound group. They are an American type of hunting dog developed for the game animals and working conditions found in the United States, specifically coon hunting. There are six distinct breeds of coonhound.'
});

//creating pets
const reese = new Pet({
 petName:"Reese",
  image:"http://i.imgur.com/C4uNhxa.jpg",
  bio:"Little bae cooling off."
});
const piper = new Pet({
 petName:"Piper",
  image:"http://i.imgur.com/C4uNhxa.jpg",
  bio:"Queen P"
 });
 const maddie = new Pet({
  petName:"Maddie",
   image:"http://i.imgur.com/C4uNhxa.jpg",
   bio:"Boxin' my way to the top"
  });
//creating pet party

const party = new Party({ 
  partyName: 'PupProwlers',
  description: 'Biggest breed party around town!',
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