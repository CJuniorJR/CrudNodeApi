let routes = {
    getAllUsers: {
        method: 'GET',
        path:'/user',
        handler:function(request,response){
            return [];
        }
    }
}

module.exports = routes;
