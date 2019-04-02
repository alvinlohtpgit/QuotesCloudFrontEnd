var express = require('express');
var router = express.Router();

var mainController = require('../controllers/mainController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/' , mainController.index);
router.get('/add', mainController.addquote);
router.post('/add', mainController.processAddquote);

router.get('/about', function(req,res){
    res.render('about');
});

router.get('/api', function(req, res){
    res.render('api');
});

module.exports = router;
