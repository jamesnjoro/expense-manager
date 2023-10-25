import Joi from "joi";

const read = {
    params: Joi.object({
        id: Joi.number().required().options({convert:true})
    })
}

const create = {
    body: Joi.object({
        name: Joi.string().required()
    })
}

const update = {
    body: Joi.object({
        name: Joi.string().required()
    }),
    params: Joi.object({
        id: Joi.number().required().options({convert:true})
    })
}

const destroy = {
    params: Joi.object({
        id: Joi.number().required().options({convert:true})
    })
}

export default {
    create, update, read, destroy
}