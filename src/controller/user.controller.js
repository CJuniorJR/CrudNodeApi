const service = require('../services/user.services')

module.exports = {
    create: async (request, h)=>{
        return await service.create(request.payload); // como é post, o parametro vem do body (olhar routes)
    },
    findById: async (request, h) =>
    {
        return await service.findById(request.params.id);//como é get, o parametro vem da url (olhar routes)
    },
    delete: (request, h) =>{
        //to-do
    }
}