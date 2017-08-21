var mongoose = require('mongoose');




const petSchema = mongoose.Schema({
 petName: String,
 image: String,
 bio: String
 
})

const userSchema = mongoose.Schema({
    userName: String,
    pet:String,
    bio:String
  });
  
const partySchema = mongoose.Schema({
  partyName:String,
  description:String,
  pets:[petSchema]
});






userSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });

  petSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });

  partySchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });



var User = mongoose.model("User", userSchema);
var Party = mongoose.model("Party",partySchema);
var Pet = mongoose.model("Pet", petSchema);



module.exports = {

    User, Party, Pet

};