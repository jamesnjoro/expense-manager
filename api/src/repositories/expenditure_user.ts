import { ExpenditureUser } from "../database/models";

const list = async () => {
    return await ExpenditureUser.findAll();
}

const create = async (body: any) => {
    return await ExpenditureUser.create(body);
}

const update = async (id: number, body: any) => {
    let expenditureUser = await ExpenditureUser.findOne({ where: { id } });
    if (expenditureUser === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `User access with id '${id}' not found`;
        throw err;
    }
    return await expenditureUser.update(body);
}

const destroy = async (id: number) => {
    let expenditureUser = await ExpenditureUser.findOne({ where: { id } });
    if (expenditureUser === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `User access with id '${id}' not found`;
        throw err;
    }
    await expenditureUser.destroy();
    return expenditureUser;
}



export default { list, create, update, destroy }
