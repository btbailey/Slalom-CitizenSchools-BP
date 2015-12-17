var express = require('express');
var router = express.Router();

/* GET Feedback page*/
router.get('', function(req, res, next) {
  res.render('feedback', { title: 'Feeback Page'});
});

module.exports = router;