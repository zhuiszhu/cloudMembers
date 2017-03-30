var express = require('express');
var router = express.Router();
var userService = require('../service/userService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login' , (req , res , next) => {
  userService.login(req , res);
})

module.exports = router;
