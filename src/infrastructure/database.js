var mongo = require('mongoose');
mongo.connect('mongodb://localhost:27017/user');

var db = mongo.connection;
db.on('error', console.error.bind(console,'Erro de conecção:'));
db.once('open',function(){
    console.log("Conexão realizada com sucesso!");
});

var user = new mongo.Schema({
    nome: {
        type: String,
        required: true
    }
});

module.exports = mongo.model('user',user);