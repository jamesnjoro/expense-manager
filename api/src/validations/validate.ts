import { Request, Response, NextFunction } from "express";
export default function (schema: any, action: string, requestProperty: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    const RequestData = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query,
    };

    let property = requestProperty as keyof typeof RequestData;

    if (
      !req.headers["content-type"] || (req.headers["content-type"] &&
        req.headers["content-type"] !== "application/json")

    ) {
      return res.status(422).json({
        error: "Invalid Content-Type",
        message: "Content-Type must be application/json."
      });
    }
    let Schema = schema[action][property];

    const { error, value } = Schema.validate(RequestData[property], {
      abortEarly: false,
      cache: false,
      convert: false,
      debug: true,
      errors: {
        stack: false,
      },
    });
    req[property] = value;

    if (error) {
      res.status(422);
      res.json({
        error: error.name,
        message: `Error in ${property}. ${error.message}`,
      });
      return res;
    }
    return next();
  };
};
