var express = require('express');
var router = express.Router();

var mainController = require('../controllers/mainController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/' , mainController.index);


module.exports = router;
