import express from 'express';
import BookingsRouter from './bookings';
import HotelsRouter from './hotels';
import RoomsRouter from './rooms';
import MiddlewareFactory from '@domain/middleware/middleware-factory';
import RoutesRegistry from '@domain/route/routes-registry';
import IAppRoute from '@domain/route/iapproute';
import ExpressRouter from '../concrete-domain/router/express-router';

class MiddlewareRegistry {
    constructor() {
        this.executeMiddlewares();
    }

    public executeMiddlewares() {
        MiddlewareFactory.Create(BookingsRouter);
        MiddlewareFactory.Create(HotelsRouter);
        MiddlewareFactory.Create(RoomsRouter);
    }

    public registerRoutesToApp(app: express.Application) {
        const registry: RoutesRegistry = RoutesRegistry.getInstance();
        const expressRouter = new ExpressRouter(app);

        registry.forEachRoute((route: IAppRoute) => {
            route.registerRoute(expressRouter);
        });
    }
}

export default MiddlewareRegistry;