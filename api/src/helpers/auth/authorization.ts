import { Request } from "express";
import { ScopeOptions } from "sequelize"

const roles = {
    "read": ['get'],
    "write": ['get', 'post', 'patch'],
    "admin": ['get', 'post', 'patch', 'delete']
}

export function buildScope(expenditurefield: string, ids: Array<number>): ScopeOptions {
    switch (expenditurefield) {
        case 'id':
            return { method: ['authorizeById', ids] };
        case 'expenditurId':
            return { method: ['authorizeByExpenditureId', ids] };
        default:
            return { method: '' };
    }
}


export function authorizeAction(entity: Object, expenditurefield: string, req: Request) {
    const { expenditures, accessLevels } = req.scopeData;
    // @ts-ignore
    if (expenditures.length == 0 || !expenditures.includes(entity[expenditurefield])) throwUnauthorized()
    const method = req.method.toLowerCase();
    // @ts-ignore
    const accessLevel = accessLevels.find((level) => level.expenditureId === entity[expenditurefield]).accessLevel as keyof typeof roles;
    if (!roles[accessLevel].includes(method)) throwUnauthorized();
}

function throwUnauthorized() {
    let err = new Error();
    err.name = 'Unauthorized'
    err.message = `You don't have access to perform this action.`;
    throw err;
}