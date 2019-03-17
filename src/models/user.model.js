const mongo = require('mongoose')


let User = new mongo.Schema({
    nome: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

});

var model = mongo.model('user', User);

module.exports = {
    schema: User,
    model: model
}