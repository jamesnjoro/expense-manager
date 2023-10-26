import express from "express";
import validate from "../validations/validate"
import validationSchema from "../validations/expenditure_user"
import controller from "../controllers/expenditure_user"

const router = express.Router();

router.get('/',
    controller.list)

router.post('/',
    validate(validationSchema, 'create', 'body'),
    controller.create)

router.patch('/:id',
    validate(validationSchema, 'update', 'params'),
    validate(validationSchema, 'update', 'body'),
    controller.update)

router.delete('/:id',
    validate(validationSchema, 'read', 'params'),
    controller.destroy)

module.exports = {
    path: 'expenditure_user',
    router: router,
    version: 'v1'
}