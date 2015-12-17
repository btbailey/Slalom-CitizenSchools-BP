var express = require('express');
var router = express.Router();

/* GET Feedback page*/
router.get('/', function(req, res, next) {
  console.log('got request', req.query);
  console.log('sending email');
});



module.exports = router;