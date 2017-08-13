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

const UserSchema = mongoose.Schema({
    userName: String,
    email: { type: String, required: true, unique: true },
    pet: String,
    img: [ItemSchema]
  });
  
const PostSchema = mongoose.Schema({
  userName: String,
  img: String,
  caption: String,
  comment: [CommentSchema],
  create_at: Date
})




UserSchema.pre('save', function(next){
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

var UserModel = mongoose.model("User", UserSchema);
var ItemModel = mongoose.model("Item",ItemSchema);
var CommentModel = mongoose.model("Comment", CommentSchema);
var PostModel = mongoose.model("Post", PostSchema);


module.exports = {
    User: UserModel, Item:ItemModel, Comment:CommentModel, Post:PostModel
};