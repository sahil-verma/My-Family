/**
 * Created by sahil on 2017-02-03.
 */
//express setup
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Asha');
});

module.exports = router;