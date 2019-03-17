const database = require('../infrastructure/database')
const user = require('../models/user.model')

module.exports = {
    findAll: async ()=>{
        return await user.model.find();
    }
};