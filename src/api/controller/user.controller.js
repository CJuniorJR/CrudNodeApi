const service = require('../services/user.services')

module.exports = {
    create: async (request, h)=>{
        return await service.create(request.payload); // como é post, o parametro vem do body (olhar routes)
    },
    findById: async (request, h) =>
    {
        return await service.findById(request.params.id);//como é get, o parametro vem da url (olhar routes)
    },
    delete: async (request, h) =>{
        return await service.delete(request.params.id);
    },
    findAll: async (request, h) => {
        if(request.query){
            return await service.findByName(request.query.nome);
        }else{
            return await service.findAll();
        }
<<<<<<< HEAD
    },
    update: async (request, h) => {
        return await service.update(request.params.id, request.payload);
=======
        
    },
    update: async (request, h)=>{
        return await service.update(request.params.id, request.payload)
<<<<<<< HEAD
>>>>>>> 7fe5757988fab1a2919032e14d456d887a606149
=======
>>>>>>> 7fe5757988fab1a2919032e14d456d887a606149
    }
}