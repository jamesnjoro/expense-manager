import { Expenditure } from "../database/models";

const list = async () => {
    return await Expenditure.findAll();
}

const read = async (id: number) => {
    let expenditure = await Expenditure.findOne({ where: { id } });
    if (expenditure === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Expenditure with id '${id}' not found`;
        throw err;
    }
    return expenditure;
}

const create = async (body: any) => {
    return await Expenditure.create(body);
}

const update = async (id: number, body: any) => {
    let expenditure = await Expenditure.findOne({ where: { id } });
    if (expenditure === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Expenditure with id '${id}' not found`;
        throw err;
    }
    return await expenditure.update(body);
}

const destroy = async (id: number) => {
    let expenditure = await Expenditure.findOne({ where: { id } });
    if (expenditure === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `Expenditure with id '${id}' not found`;
        throw err;
    }
    await expenditure.destroy();
    return expenditure;
}



export default { list, read, create, update, destroy }
