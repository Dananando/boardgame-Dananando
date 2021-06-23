const Joi = require('joi');

const schema = Joi.object({
    id: Joi.number().integer().optional(),
    name: Joi.string().required(),
    author: Joi.string().required(),
    editor: Joi.string().required(),
    min_players: Joi.number().integer().required(),
    max_players: Joi.number().integer().required(),
    min_age: Joi.number().integer().required()
});

module.exports = schema;