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

router.delete('/:id', function (req, res, next) {
  console.log({ hasMagic: jobs.length })
  console.log({ magical: jobs.length })
  jobs = jobs.filter(j => j.id !== req.params.id)
  console.log({ hasMagic: jobs.length })
  res.status(202).send('thanks')
});

module.exports = router;
