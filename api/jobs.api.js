const express = require('express');
const router = express.Router();

let jobs = require('../data.json')

console.log({ jobs });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a list of jobs');
});

module.exports = router;
