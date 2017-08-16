var mongoose = require('mongoose');




const descriptionSchema = mongoose.Schema({
 Breed: String,
 Characteristics:String
 
})

const userSchema = mongoose.Schema({
    username: String,
    pet:String,
    bio:String
  });
  
const petSchema = mongoose.Schema({
  name:String,
  image:String,
  description:String,
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

  descriptionSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });



var User = mongoose.model("User", userSchema);
var Description = mongoose.model("Description",descriptionSchema);
var Pet = mongoose.model("Pet", petSchema);



module.exports = {

    User, Description, Pet

};