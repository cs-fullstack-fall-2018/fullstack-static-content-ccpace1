var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.redirect('https://www.linkedin.com/in/christopher-pace-314205171/');
});

module.exports = router;