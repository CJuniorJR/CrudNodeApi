let routes = {
        method: 'GET',
        path:'/user',
        handler:function(request,h){
            return h.response([]).code(200);
        }
}

module.exports = routes;
