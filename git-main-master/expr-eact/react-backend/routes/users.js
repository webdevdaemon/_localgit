var express = require('express');
var router = express.Router();
var data = require('../client/src/medical_data.1')

/* GET users listing. */
router.get('/', function (req, res, next) {
	//   res.send('respond with a resource');
	res.json([{
		id: 1,
		username: "samsepi01"
	}, {
		id: 2,
		username: "D0loresH4ze"
	}])
});

module.exports = router;
