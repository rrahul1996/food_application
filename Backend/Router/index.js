const express = require('express');

// initialize the express router
const route = express.Router();

// import all the controller components
const locationController = require('../Controllers/Locations');
const mealtypeController = require('../Controllers/Mealtypes');
const restaurantController = require('../Controllers/Restaurants');
const userController = require('../Controllers/users'); 
const menuItemsController = require('../Controllers/Menuitems');
const ordersController = require('../Controllers/Orders');
const paymentGatewayController = require('../Controllers/Payments');

// register all the routes
route.get('/locations', locationController.getLocations);
route.get('/mealtypes', mealtypeController.getMealtypes);
route.get('/restaurants/:locId', restaurantController.getRestaurantsByLocId);
route.post('/userlogin', userController.userLogin);
route.post('/usersignup', userController.userSignUp);
route.get('/restaurant/:resId', restaurantController.getRestaurantDetailsById);
route.get('/menuitems/:resId', menuItemsController.getMenuItemsByRes);
route.post('/order', ordersController.saveOrderDetails);
route.get('/order/:userId', ordersController.getOrderByUserId);
route.post('/filter', restaurantController.restaurantsFilter);
route.post('/payment', paymentGatewayController.payment);
route.post('/callback', paymentGatewayController.callback);
// export the routes
module.exports = route ;
