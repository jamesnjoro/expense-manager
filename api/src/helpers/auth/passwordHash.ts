import bcrypt from 'bcryptjs';

export const hashPasword = (password:string)=>{
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);

    return hash
}

export const verifyPassword = (hash:string,password:string)=>{
    return bcrypt.compareSync(password, hash);
}