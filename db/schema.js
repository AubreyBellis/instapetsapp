var mongoose = require('mongoose');




const CommentSchema = mongoose.Schema({
  text: String,
  created_at: Date
})

const UserSchema = mongoose.Schema({
    userName: String,
    password: { type: String, required: true, unique: true },
    image:String
  });
  
const PostSchema = mongoose.Schema({
 newTitle:String,
  newImage:String,
  newText:String,
  comment:[CommentSchema]
});
const UserProfileSchema = mongoose.Schema({
  username:String,
  pet:String,
  image:[PostSchema]
})




UserProfileSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });
  PostSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });
  CommentSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });
  UserSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });

var UserModel = mongoose.model("User", UserSchema);
var UserProfileModel = mongoose.model("UserProfile",UserProfileSchema);
var UserCommentModel = mongoose.model("UserComment", CommentSchema);
var PostModel = mongoose.model("Post", PostSchema);


module.exports = {

    UserProfile: UserProfileModel, User:UserModel, UserComment:UserCommentModel, Post:PostModel

};