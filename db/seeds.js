require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

//

var Comment = require('../models/comment');
var Post = require('../models/post');
var UserProfile = require('../models/userProfile');
var Item = require('../models/item');

mongoose.Promise = global.Promise;

UserProfile.remove({}, function(err){
    console.log(err);
});    
Post.remove({}, function(err){
  console.log(err);
});





// creating users
var aubrey = new UserProfile({
  userName: 'Reese',
  email: 'aubreyb@gmail.com',
  pet:'German Shepherd Dog',
  imgBoard: [
    {
      item:"http://i.imgur.com/C4uNhxa.jpg",
      caption:"Bae"
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

var jessica = new UserProfile({
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


var mike = new UserProfile({
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
 var NewPost = new Post({
  newTitle:"",
  newImage:"",
  newText:""
 });





NewPost.save().then(() => console.log("new post saved!"));

aubrey.save().then(() => console.log("aubrey saved!"));
jessica.save().then(() => console.log("j saved"));
mike.save().then(() => console.log('Mike Saved'));

mongoose.connection.close();