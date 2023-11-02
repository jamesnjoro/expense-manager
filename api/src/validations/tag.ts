import Joi from "joi";

const read = {
    params: Joi.object({
        id: Joi.number().required().options({ convert: true })
    })
}

const create = {
    body: Joi.object({
        expenditureId: Joi.number().required(),
        name: Joi.string().required(),
        type: Joi.string().required()
    })
}

const update = {
    body: Joi.object({
        expenditureId: Joi.number(),
        name: Joi.string(),
        type: Joi.string()
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