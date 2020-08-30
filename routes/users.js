var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/echo', function(req, res, next) {
  res.send('echo back');
});

module.exports = router;
