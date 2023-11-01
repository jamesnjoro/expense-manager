import express from "express";
import validate from "../validations/validate"
import validationSchema from "../validations/product"
import controller from "../controllers/product"

const router = express.Router();

router.get('/',
    controller.list)

router.get('/:id',
    validate(validationSchema, 'read', 'params'),
    controller.read)

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
    path: 'products',
    router: router,
    version: 'v1'
}