const user = require('../models/user.model')

module.exports = {
    findById: async (id) =>{
        return await user.model.findById(id);
    },
    create: async(u) => {
        return await user.model.create(u);
    },
    delete: async(id) => {
        return await user.model.findByIdAndDelete(id);
    },
    findAll: async() => {
        return await user.model.find();
    },
    findByName: async(name) => {
        return await user.model.find({nome: new RegExp(name,'i')});
    },
    update: async(id,u) => {
        let usr = await user.model.findById(id);
        usr.nome = u.nome;
        usr.email = u.email;
        usr.login = u.login;
        usr.senha = u.senha;

        return await user.model.updateOne({_id: id}, {$set:usr})
    }
};