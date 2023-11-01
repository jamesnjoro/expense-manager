import jwt from 'jsonwebtoken'
require('dotenv').config();


interface JwtPayload {
    email?: string;
    userId?: number
}


const jwtSecret = process.env.JWT_SECRET ? process.env.JWT_SECRET : "secret";

export const signToken = (object: Object) => {
    return jwt.sign({
        ...object
    }, jwtSecret, { expiresIn: '1h' });
}

export const verifyToken = async (token: string) => {
    return await <JwtPayload>jwt.verify(token, jwtSecret);
}