const database = require('../infrastructure/database')
const user = require('../models/user.model')

module.exports = {
    findById: async (id) =>{
        return await user.model.findById(id);
    },
    create: async(u) => {
        return await user.model.create(u);
    },
    delete: async(id) => {
        //to-do
    }

};