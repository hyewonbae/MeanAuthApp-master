const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Review = require('../models/review');

router.post('/addreview', function(req, res, next) {
  const newReview = new Review({
    name: req.body.name,
    des: req.body.des
    
  });

  Review.addReview(newReview, (err, review) => {
    if(err){
      res.json({success: false, msg:'Failed to add review', err: err})
    } else {
      res.json({success: true, msg:'review added'})
    }
  });
});

//=======================================>

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//==================================================<

router.post('/authenticate', function(req, res, next) {
  const name = req.body.name;
  const des = req.body.des;
  
  Review.getReviewByname(name, (err, review) => {
    // if(err) throw err;
    if(!review) {
      return res.json({success:false, msg:'Review not found'});
    }
    
  })
});



router.get('/reviewlist', (req, res, next) => { //////////////////////////////요부분

    Review.getReviewAll ((err, review) => { 
    if(err) {throw err;}
res.json({review:review});
   

  });
 
});
//==================================================>

module.exports = router;
