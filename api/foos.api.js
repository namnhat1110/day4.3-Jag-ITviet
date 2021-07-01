const express = require('express');
const router = express.Router();

// 1. C.R.U.D.
// 2. R.E.S.T.

router.get('/', function(req, res, next) {
  res.send('respond with a list of foos');
});
router.get('/:id', function(req, res, next) {
  res.send('individual foo');
});
router.patch('/:id', function(req, res, next) {
  res.send('update an individual foo');
});
router.delete('/', function(req, res, next) {
  res.send("delete an individual foo");
});

module.exports = router;
