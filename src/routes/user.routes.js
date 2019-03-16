const userController = require('../controller/user.controller');
const userDb = require('../infrastructure/database');

var eu = new userDb({
    nome: "Claudio"
});

let routes = {
        method: 'GET',
        path:'/user',
        handler:function(request,h){
            userController.findAll(request,h); // não entendi esta parte.
            return h.response([eu]).code(200);
        }
}

module.exports = routes;
