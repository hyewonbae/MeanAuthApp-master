var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('Invalid Endpoint');
});


router.get('/get-data', function(req, res) {
  Shopping.find( function(err, docs) {
    if(err) {
      res.status(500).send({ error: 'database failure' });
      return;
    }
    res.render('profile', {items: docs})
  });
});
module.exports = router;
