const service = require('../services/user.services')

module.exports = {
    findAll: async (request, h) => {
        let users =  await service.findAll();

        return h.response(users).code(200);
    }
}