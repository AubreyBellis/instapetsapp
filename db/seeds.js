require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

//

var Comment = require('../models/userComment');
var Post = require('../models/post');
var UserProfile = require('../models/userProfile');
var User = require('../models/user');

mongoose.Promise = global.Promise;

User.remove({}, function(err){
    console.log(err);
});    
Post.remove({}, function(err){
  console.log(err);
});
// UserComment.remove({}, function(err){
//   console.log(err);
// });





// creating users
const user1 = new User({
  userName: 'Reese',
  password:'abbelove3',
  image:""
});
const user2 = new User({
  userName: "PiperGirl",
  password: "jMatt",
  image:""
});
//creating post 
const Post1 = new Post({
  newTitle:"A day at the Park",
  newImage:"",
  newText:"",
  comment:[]
 });
const Post2 = new Post({
  newTitle:"Feelin' this weather",
  newImage:"",
  newText:"",
  comment:[]
 });
 const Post3 = new Post({
  newTitle:"Always happy!",
  newImage:"",
  newText:"",
  comment:[]
 });

 const userProfile1 = new UserProfile({
  username:"Reese",
  pet:"German Shepherd Dog",
  images:[]
 })





Post1.save().then(() => console.log("post saved!"));
Post2.save().then(() => console.log("post saved!"));
Post3.save().then(() => console.log("post saved!"));

user1.save().then(() => console.log("user saved!"));
user2.save().then(() => console.log("user saved"));

userProfile1.save().then(() => console.log("new user profile saved"));


mongoose.connection.close();