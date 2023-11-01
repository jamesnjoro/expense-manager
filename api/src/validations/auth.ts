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
        token: Joi.string().required()
    }).with('password', 'repeat_password')
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