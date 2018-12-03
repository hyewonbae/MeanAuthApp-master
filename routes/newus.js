const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Newu = require('../models/newu');

router.post('/register', function(req, res, next) {
  const newNewu = new Newu({
    name: req.body.name,
   // email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  Newu.addNewu(newNewu, (err, newu) => {
    if(err){
      res.json({success: false, msg:'Failed to register new user', err: err})
    } else {
      res.json({success: true, msg:'User registered'})
    }
  });
});

//=======================================>
router.get('/userlist', (req, res, next) => { 

  Newu.getUserAll ((err, user) => { 
    if(err) {throw err;}
res.json({user:user});
   

  });
 
});
//==================================================>

module.exports = router;
