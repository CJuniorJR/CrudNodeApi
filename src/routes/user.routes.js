const userController = require('../controller/user.controller');

let routes = {
        method: 'GET',
        path:'/user',
        handler: userController.findAll
}

module.exports = routes;
