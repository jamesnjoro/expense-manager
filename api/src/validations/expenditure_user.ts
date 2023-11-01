import Joi from "joi";

const read = {
    params: Joi.object({
        id: Joi.number().required().options({ convert: true })
    })
}

const create = {
    body: Joi.object({
        expenditureId: Joi.number().required(),
        userId: Joi.number().required(),
        accessLevel: Joi.string().valid('admin', 'write', 'read').required()
    })
}

const update = {
    body: Joi.object({
        expenditureId: Joi.number(),
        userId: Joi.number(),
        accessLevel: Joi.string().valid('admin', 'write', 'read')
    }),
    params: Joi.object({
        id: Joi.number().required().options({ convert: true })
    })
}

const destroy = {
    params: Joi.object({
        id: Joi.number().required().options({ convert: true })
    })
}

export default {
    create, update, read, destroy
}