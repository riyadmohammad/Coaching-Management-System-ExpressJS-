var express = require('express');
var router = express.Router();

router.get('/', function(req, res){


	res.clearCookie('email');
	res.redirect('/home');
});

module.exports = router;