import { Product } from "../database/models";
import { buildScope, authorizeAction } from "../helpers/auth/authorization";
import { Request } from "express";


const list = async (req: Request) => {
    let scope = buildScope('expenditureId', req.scopeData.expenditures)
    return await Product.scope(scope).findAll();
}

const read = async (id: number, req: Request) => {
    let product = await Product.findOne({ where: { id } });
    if (product === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Product with id '${id}' not found`;
        throw err;
    }
    authorizeAction(product, 'expenditureId', req);
    return product;
}

const create = async (body: any, req: Request) => {
    authorizeAction(body, 'expenditureId', req);
    const product = await Product.create(body);
    return product
}

const update = async (id: number, body: any, req: Request) => {
    let product = await Product.findOne({ where: { id } });
    if (product === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Product with id '${id}' not found`;
        throw err;
    }
    if(product.expenditureId) authorizeAction(body, 'expenditureId', req);
    authorizeAction(product, 'expenditureId', req);
    return await product.update(body);
}

const destroy = async (id: number, req: Request) => {
    let product = await Product.findOne({ where: { id } });
    if (product === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Product with id '${id}' not found`;
        throw err;
    }
    authorizeAction(product, 'expenditureId', req);
    await product.destroy();
    return product;
}



export default { list, read, create, update, destroy }
