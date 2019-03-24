const hapi = require('hapi');
const userRoute = require('./routes/user.routes');
const database = require('./infrastructure/database');
const server = hapi.server({
    host:'localhost',
    port:8000
});

server.route(userRoute);

const start = async function(){
    try {
        await server.start();
        await database();
    } 
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Servidor rodando em:',server.info.uri);
};
start();