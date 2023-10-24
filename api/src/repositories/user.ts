import { User } from "../database/models";

const create = async (body: any) => {
    return await User.create(body);
}

const getByEmail = async (email:string) =>{
    const user =  await User.findOne({where:{email}});
    if (user === null) {
        let err = new Error();
        err.name = 'Not Found'
        err.message = `User with email '${email}' not found`;
        throw err;
    }
    return user;
}

export default { create,getByEmail }
