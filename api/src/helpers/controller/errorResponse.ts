import { Response } from 'express'

const errors404 = ['Not Found'];

const error422 = ['SequelizeForeignKeyConstraintError']

const errors401 = ['Incorrect Password', 'Invalid token', 'JsonWebTokenError'];

export default function (err: any, res: Response) {
    res.status(500);

    if (errors401.includes(err.name)) {
        res.status(401);
    }
    if (errors404.includes(err.name)) {
        res.status(404);
    }

    if (error422.includes(err.name)) {
        res.status(422);
    }
    res.json({ error: err.name, message: err.message })
    return res;
}