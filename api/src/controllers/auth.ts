import { Response, Request } from "express";
import { signToken, verifyToken } from "../helpers/auth/token";
import { hashPasword, verifyPassword } from "../helpers/auth/passwordHash";
import { sendMail } from "../services/email/mailer";
import transformError from '../helpers/controller/errorResponse';
import repository from "../repositories/user"
require('dotenv').config();


const register = async (req: Request, res: Response) => {
    try {
        const email: string = req.body.email;
        const emailToken = signToken({email});
        let emailElements = {
            to: email,
            subject: `Registration request from ${process.env.APP_NAME}`,
            templateVars: {
                registration_link: `${process.env.APP_URL}/auth/create-user/${emailToken}`
            }
        }
        await sendMail('register', emailElements)
        res.status(200)
        return res.json({ message: "Registration email sent!" })
    } catch (err) {
        return transformError(err, res);
    }

}

const createUser = async (req: Request, res: Response) => {
    try {
        const token = req.params.token;
        const { name, password } = req.body

        const {email} = await verifyToken(token);
        if (!email) {
            let err = new Error();
            err.name = 'Invalid token'
            err.message = `Provided token is invalid!`;
            throw err;
        }
        const user = { name, email, password_hash: hashPasword(password) }
        const newUser = await repository.create(user);
        res.status(201);
        return res.json({ data: newUser, message: "User created successfully." });
    } catch (err) {
        return transformError(err, res);
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const user = await repository.getByEmail(email);
        if (!verifyPassword(user.password_hash, password)) {
            let err = new Error();
            err.name = 'Incorrect Password'
            err.message = `The password provided for email ${user.email} is invalid.`;
            throw err;
        }
        const token = signToken({id:user.id})
        res.status(200);
        return res.json({ data: {token}, message: "Log in successful." })
    } catch (err) {
        return transformError(err, res);
    }
}

export default {
    register, createUser, login
}
