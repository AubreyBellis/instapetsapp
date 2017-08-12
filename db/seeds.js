require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

//

var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');
var Item = require('../models/item');

mongoose.Promise = global.Promise;

User.remove({}, function(err){
    console.log(err);
});    





// creating users
var aubrey = new User({
  userName: 'AuBs03',
  email: 'aubreyb@gmail.com',
   pet:'German Shepherd Dog',
  imgBoard: [
    {
      item:"",
      caption:""
    },
    {
      item:"",
      caption:""
    },
    {
      item: "",
      caption:""
    },
    {
      item:"",
      caption:""
    },
  ]
});

var jessica = new User({
  userName: 'JMatt',
  email: 'Jessica@gmail.com',
  pet: 'Hound',
  imgBoard: [
    {
      item:"",
      caption:""
    },
    {
      item:"",
      caption:""
    },
    {
      item: "",
      caption:""
    },
    {
      item:"",
      caption:""
    },
  ]
});


var mike = new User({
  userName:'DirtyMike',
  email: 'filthymike@gmail.com',
  pet: 'amphibians',
  imgBoard: [
    {
      item:"",
      caption:""
    },
    {
      item:"",
      caption:""
    },
    {
      item: "",
      caption:""
    },
    {
      item:"",
      caption:""
    },
  ]
});








aubrey.save().then(() => console.log("aubrey saved!"));
jessica.save().then(() => console.log("j saved"));
mike.save().then(() => console.log('Mike Saved'));

mongoose.connection.close();