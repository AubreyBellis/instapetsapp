var mongoose = require('mongoose');




const UserSchema = mongoose.Schema({
    userName: String,
    email: String,
    pet: String,
    imgBoard: []
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




module.exports = {
    User: UserModel
};