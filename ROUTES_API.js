const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('api home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About api')
})

module.exports = router