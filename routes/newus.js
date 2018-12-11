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
router.get('/deleteuser', (req, res, next) => { 

  Newu.deleteUser((err, user) => { 
    if(err) {throw err;}
    res.json({user:user});

  });
});

router.post('/authenticate', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  
  Newu.getNewuByUsername(username, (err, user) => {
    // if(err) throw err;
    if(!user) {
      return res.json({success:false, msg:'NUser not found'});
    }
    
    Newu.comparePassword(password, user.password, (err, isMatch) => {
      // if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800  // 1 week in seconds
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          newu: {
            id: user._id,
            name: user.name,
            username: user.username
           
          }
        });
      } else {
        return res.json({success: false, msg:'Wrong password'});
      }
    })
  })
});
module.exports = router;
