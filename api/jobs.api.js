const express = require('express');
const router = express.Router();

let { jobs } = require('../data.json')

router.get('/', function (req, res, next) {
  res.json(jobs)
});

router.post('/', function (req, res, next) {
  const j = req.body;
  jobs.unshift(j)
  res.json(j)

});

module.exports = router;
