import Joi from "joi";


const register = {
    body: Joi.object({
        email: Joi.string().email().required()
    })
}

const createUser = {
    body: Joi.object({
        name: Joi.string().required(),
        password: Joi.string().required(),
        repeat_password: Joi.ref('password'),
    }).with('password', 'repeat_password'),
    params: Joi.object({
        token: Joi.string().required()
    })
}

const login = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}

export default {
    register, createUser, login
}