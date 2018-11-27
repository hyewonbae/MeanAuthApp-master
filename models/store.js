const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


// User Schema
const StoreSchema = mongoose.Schema({
  name: {
    type: String
  },
  // email: {
  //   type: String,
  //   required: true
  // },
  des: {
    type: String,
    required: true
  
  }
});

const Store = module.exports = mongoose.model('Store', StoreSchema);

module.exports.getStoreById = function(id, callback){
    Store.findById(id, callback);
}

module.exports.getStoreByname = function(name, callback){
  const query = {name: name}
  Store.findOne(query, callback);
}

module.exports.addStore = function(newStore, callback){
  
      newStore.save(callback);
    
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    //if(err) throw err;
    callback(null, isMatch);
  });
}