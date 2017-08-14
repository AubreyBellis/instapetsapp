var mongoose = require('mongoose');


const ItemSchema = mongoose.Schema(
  { img: 
      { data: Buffer, contentType: String }
  }
);

const CommentSchema = mongoose.Schema({
  text: String,
  created_at: Date
})

const UserProfileSchema = mongoose.Schema({
    userName: String,
    email: { type: String, required: true, unique: true },
    pet: String,
    imgBoard: [ItemSchema]
  });
  
const PostSchema = mongoose.Schema({
  newTitle:String,
  newImage:String,
  newText:String
});




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
  ItemSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });

var UserProfileModel = mongoose.model("UserProfile", UserProfileSchema);
var ItemModel = mongoose.model("Item",ItemSchema);
var CommentModel = mongoose.model("Comment", CommentSchema);
var PostModel = mongoose.model("Post", PostSchema);


module.exports = {

    UserProfile: UserProfileModel, Item:ItemModel, Comment:CommentModel, Post:PostModel

};