import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../helpers/auth/token";
import { ExpenditureUser } from "../database/models";
import _ from 'lodash'

const guestUrls = ['/auth/v1/login', '/auth/v1/create-user', '/auth/v1/register']

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (guestUrls.includes(req.path)) return next()
        const authHeader = req.headers.authorization?.split("Bearer ")[1];
        if (!authHeader) throw new Error("No bearer token provided.")
        let user = await verifyToken(authHeader);
        if (user.userId) req.scopeData = await getAuthorizationData(user.userId);
        return next();
    } catch (err: any) {
        res.status(401);
        res.json({ error: 'Authentication Error', message: err.message })
    }
}

const getAuthorizationData = async (userId: number) => {
    const accessLevels = await ExpenditureUser.findAll({
        where: {
            userId,
        },
        attributes:['expenditureId','accessLevel']
    });
    const expenditures = _.map(accessLevels,'expenditureId');
    const scopeData = { userId , expenditures, accessLevels }
    return scopeData
}


export { authenticate }
