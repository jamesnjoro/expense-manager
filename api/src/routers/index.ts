import requireDir from "require-dir";
import {Express,Request,Response,NextFunction} from "express";

const directory = requireDir("./", { recurse: true });

const registerRoutes = (app:Express) =>{
    // @ts-ignore
    app.use((err:{status:number,message:string}, _req:Request, res:Response, next:NextFunction) => {
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            return res.status(400).json({ error: 'Invalid JSON',message:err.message });
        }
        next();
    });


    Object.values(directory).forEach(({ path, router, version}) => {
        app.use(`/${path}/${version}`, router);
    });

    app.use((_req: Request, res: Response) => {
        return res.status(404).json({ error: 'Resource Not Found', message: "The endpoint visited does not exist." });
    })
}

export default registerRoutes