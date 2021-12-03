var express = require('express');
var router = express.Router();

const restaurantController = require('../controllers/restaurantController');
/* GET home page. */
router.get('/', restaurantController.viewAll);
router.get('/edit/:id', restaurantController.renderEditForm);
router.get('/edit/:id', restaurantController.updateRestaurant);
router.get('/delete/:id', restaurantController.deleteRestaurant);
router.get('/add', restaurantController.renderAddForm);
router.get('/add', restaurantController.addRestaurant);
module.exports = router;

