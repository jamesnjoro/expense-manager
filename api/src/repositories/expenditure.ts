import { Expenditure, ExpenditureUser } from "../database/models";
import { buildScope, authorizeAction } from "../helpers/auth/authorization";
import { Request } from "express";


const list = async (req: Request) => {
    let scope = buildScope('id', req.scopeData.expenditures)
    return await Expenditure.scope(scope).findAll();
}

const read = async (id: number, req: Request) => {
    let expenditure = await Expenditure.findOne({ where: { id } });
    if (expenditure === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Expenditure with id '${id}' not found`;
        throw err;
    }
    authorizeAction(expenditure, 'id', req);
    return expenditure;
}

const create = async (body: any, req: Request) => {
    const expenditure = await Expenditure.create(body);
    const expenditure_user = {
        expenditureId: expenditure.id,
        userId: req.scopeData.userId,
        accessLevel:'admin'
    }
    await ExpenditureUser.create(expenditure_user)
    return expenditure
}

const update = async (id: number, body: any, req: Request) => {
    let expenditure = await Expenditure.findOne({ where: { id } });
    if (expenditure === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Expenditure with id '${id}' not found`;
        throw err;
    }
    authorizeAction(expenditure, 'id', req);
    return await expenditure.update(body);
}

const destroy = async (id: number, req: Request) => {
    let expenditure = await Expenditure.findOne({ where: { id } });
    if (expenditure === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Expenditure with id '${id}' not found`;
        throw err;
    }
    authorizeAction(expenditure, 'id', req);
    await expenditure.destroy();
    return expenditure;
}



export default { list, read, create, update, destroy }
