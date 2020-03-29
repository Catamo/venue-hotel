import express from 'express';
import asyncHandler from 'express-async-handler';
import IAppRoute from "@domain/route/iapproute";
import IAppRouter from "@domain/router/iapprouter";

class ExpressRouter implements IAppRouter {
    protected app: express.Application;

    constructor(app: express.Application) {
        this.app = app;
    }

    delete(route: IAppRoute): void {
        this.app.delete(route.path, asyncHandler(route.handler));
    }

    get(route: IAppRoute): void {
        this.app.get(route.path, asyncHandler(route.handler));
    }

    post(route: IAppRoute): void {
        this.app.post(route.path, asyncHandler(route.handler));
    }

    put(route: IAppRoute): void {
        this.app.put(route.path, asyncHandler(route.handler));
    }
}

export default ExpressRouter;