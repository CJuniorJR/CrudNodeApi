const userController = require('../controller/user.controller');

let routes = [{
        method: 'GET',
        path: '/user/{id}', // no caso de get, os parametros sao passados pela url (request.params)
        handler: userController.findById
},
{
        method: 'POST',
        path: '/user', //no caso de post, os parametros sao passados no body (request.payload)
        handler: userController.create
},
{
        method: 'DELETE',
        path: '/user/{id}', // no caso de get, os parametros sao passados pela url (request.params)
        handler: userController.delete
},
]

module.exports = routes;
