import express from "express";
import validate from "../validations/validate"
import validationSchema from "../validations/auth"
import controller from "../controllers/auth"

const router = express.Router();

router.post('/create-user/:token',
    validate(validationSchema, 'createUser', 'params'),
    validate(validationSchema, 'createUser', 'body'),
    controller.createUser)

router.post('/register',
    validate(validationSchema, 'register', 'body'),
    controller.register)

router.post('/login',
    validate(validationSchema, 'login', 'body'),
    controller.login)

module.exports = {
    path: 'auth',
    router: router,
    version: 'v1'
}