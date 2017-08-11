require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

//creating a few users for db



var User = require('../models/user');
mongoose.Promise = global.Promise;
User.remove({}, function(err){
    console.log(err);
});




// creating users
var aubrey = new User({
  userName: 'AuBs03',
  email: 'aubreyb@gmail.com',
   pet:'German Shepherd Dog',
  img: 'img'
});

var jessica = new User({
  userName: 'JMatt',
  email: 'Jessica@gmail.com',
  pet: 'Hound',
img: 'img'
});

var mike = new User({
  userName:'DirtyMike',
  email: 'filthymike@gmail.com',
  pet: 'amphibians',
 img: 'img'
});

// save the users
// aubrey.save(function(err) {
//   if (err) console.log(err);

//   console.log('aubs!');
// });

// jessica.save(function(err) {
//   if (err) console.log(err);

//   console.log('J!');
// });

// mike.save(function(err) {
//   if (err) console.log(err);
  
//   console.log('Mikeee');
// });


aubrey.save().then(() => console.log("aubrey saved!"));
jessica.save().then(() => console.log("j saved"));
mike.save().then(() => console.log('Mike Saved'));

mongoose.connection.close();