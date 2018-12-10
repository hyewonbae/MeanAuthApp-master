const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Store = require('../models/store');

router.post('/addstore', function(req, res, next) {
  const newStore = new Store({
    name: req.body.name,
    des1: req.body.des1,
    des2: req.body.des2,
    des3: req.body.des3,
    call:req.body.call,
    add:req.body.add,
    pic: req.body.pic
    
  });

  Store.addStore(newStore, (err, store) => {
    if(err){
      res.json({success: false, msg:'Failed to add user', err: err})
    } else {
      res.json({success: true, msg:'User registered'})
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
  
  Store.getStoreByUsername(name, (err, store) => {
    // if(err) throw err;
    if(!store) {
      return res.json({success:false, msg:'Store not found'});
    }
    
  })
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

router.get('/storelist', (req, res, next) => { //////////////////////////////요부분

  Store.getStoreAll ((err, store) => { 
    if(err) {throw err;}
res.json({store:store});
   

  });
 
});
//==================================================>

module.exports = router;
