const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');


//=======================================>

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//==================================================<

router.post('/authenticate', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  
  User.getUserByUsername(username, (err, user) => {
    // if(err) throw err;
    if(!user) {
      return res.json({success:false, msg:'User not found'});
    }
    
    User.comparePassword(password, user.password, (err, isMatch) => {
      // if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800  // 1 week in seconds
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg:'Wrong password'});
      }
    })
  })
});


//==================================================>

module.exports = router;
