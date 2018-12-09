const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const NewuSchema = mongoose.Schema({
  name: {
    type: String
  },
  // email: {
  //   type: String,
  //   required: true
  // },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Newu = module.exports = mongoose.model('Newu', NewuSchema);

module.exports.getNewuById = function(id, callback){
  Newu.findById(id, callback);
}

module.exports.getNewuByUsername = function(username, callback){
  const query = {username: username}
  Newu.findOne(query, callback);
}

module.exports.addNewu = function(newNewu, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newNewu.password, salt, (err, hash) => {
      //if(err) throw err;
      newNewu.password = hash;
      newNewu.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    //if(err) throw err;
    callback(null, isMatch);
  });
}
module.exports.getUserAll = function(id, callback){
  Newu.find({},function(err,results){
    if(err) {throw err;}
    if (results) {
      // user = results[0]._doc.name;
         console.log('유저정보:', 
          results[0]._doc.username, results[0]._doc.name,results[0]._doc.password);
      Newu.find(id,results);
      }
  })
 
}
module.exports.deleteUser=function(id,callback){
  Newu.deleteOne({},function(err,results){
        if(err) {throw err;}
        if (results) {
          console.log("유저삭제")
          Newu.getUserAll(id,results);
          }
  })
}