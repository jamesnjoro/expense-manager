import { Tag } from "../database/models";
import { buildScope, authorizeAction } from "../helpers/auth/authorization";
import { Request } from "express";


const list = async (req: Request) => {
    let scope = buildScope('expenditureId', req.scopeData.expenditures)
    return await Tag.scope(scope).findAll();
}

const read = async (id: number, req: Request) => {
    let tag = await Tag.findOne({ where: { id } });
    if (tag === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Tag with id '${id}' not found`;
        throw err;
    }
    authorizeAction(tag, 'expenditureId', req);
    return tag;
}

const create = async (body: any, req: Request) => {
    authorizeAction(body, 'expenditureId', req);
    const tag = await Tag.create(body);
    return tag
}

const update = async (id: number, body: any, req: Request) => {
    let tag = await Tag.findOne({ where: { id } });
    if (tag === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Tag with id '${id}' not found`;
        throw err;
    }
    if(body.expenditureId) authorizeAction(body, 'expenditureId', req);
    authorizeAction(tag, 'expenditureId', req);
    return await tag.update(body);
}

const destroy = async (id: number, req: Request) => {
    let tag = await Tag.findOne({ where: { id } });
    if (tag === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Tag with id '${id}' not found`;
        throw err;
    }
    authorizeAction(tag, 'expenditureId', req);
    await tag.destroy();
    return tag;
}



export default { list, read, create, update, destroy }
