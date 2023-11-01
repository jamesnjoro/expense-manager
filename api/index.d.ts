import { Express } from "express-serve-static-core";

interface ScopeData {
    userId: number;
    expenditures: Array<number>;
    accessLevels: Array<any>;
}

declare module "express-serve-static-core" {
    interface Request {
        scopeData: ScopeData;
    }
}