
var express = require('express');
var router = express.Router();

// TODO: refactor the 'require' lines in a more extendable way.
var CONTROLLER_PATH = '../api/controllers/';
var index = require(CONTROLLER_PATH + 'indexController.js');
var user = require(CONTROLLER_PATH + 'userController.js');

// home
router.get('/', index.index);

// user
router.get('/users', user.index);
router.get('/user/new', user.new);
router.put('/user/:id?', user.update);
router.get('/user/:id?', user.show);


module.exports = router;
