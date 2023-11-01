import { Response, Request } from "express";
import transformError from '../helpers/controller/errorResponse';
import respository from '../repositories/product';


const list = async (req: Request, res: Response) => {
    try {
        const result = await respository.list(req);
        res.status(200);
        return res.json({ data: result, message: "Success" })
    } catch (err) {
        return transformError(err, res);
    }
}

const read = async (req: Request, res: Response) => {
    try {
        const result = await respository.read(parseInt(req.params.id),req)
        res.status(200);
        return res.json({ data: result, message: "Success" })
    } catch (err) {
        return transformError(err, res);
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const result = await respository.create(req.body,req);
        res.status(201);
        return res.json({ data: result, message: "Product created successfully" })
    } catch (err) {
        return transformError(err, res);
    }
}

const update = async (req: Request, res: Response) => {
    try {
        const result = await respository.update(parseInt(req.params.id), req.body,req);
        res.status(200);
        return res.json({ data: result, message: "Product updated successfully" })
    } catch (err) {
        return transformError(err, res);
    }
}

const destroy = async (req: Request, res: Response) => {
    try {
        const result = await respository.destroy(parseInt(req.params.id),req);
        res.status(202);
        return res.json({ data: result, message: "Product Deleted successfully" })
    } catch (err) {
        return transformError(err, res);
    }

}



export default {
    list, read, create, update, destroy
}
