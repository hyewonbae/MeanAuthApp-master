const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


// User Schema
const ReviewSchema = mongoose.Schema({
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

const Review = module.exports = mongoose.model('Review', ReviewSchema);
module.exports.getReviewAll = function(id, callback){//////////////////////////요부분 전체
    Review.find({},function(err,results){
    if(err) {throw err;}
    if (results) {
    
          Review.find(id,results);
		}
  })
 
}
module.exports.getReviewById = function(id, callback){
    Review.findById(id, callback);
}

module.exports.getReviewByname = function(name, callback){
  const query = {name: name}
  Review.findOne(query, callback);
}
module.exports.getReviewBydes= function(des, callback){
  const query1 = {des: des}
  Review.findOne(query1, callback);
}

module.exports.addReview = function(newReview, callback){
  
      newReview.save(callback);
    
}

module.exports.remove=function(name,callback){
  const query={name:name}
  Review.deleteOne(query,callback);
}