import Middleware from '@domain/middleware/middleware';
import RoomsRoutesHandlers from './routes-handlers';
import { GetRoute } from '@server/concrete-domain/route';
import IHttpConfig from '@domain/http-methods/ihttp-config';

class RoomsRoutes extends Middleware {
    private path: string = '/rooms/';
    private pathWithId: string = '/rooms/:id';
    private routeHandlers: RoomsRoutesHandlers;

    constructor(config: IHttpConfig) {
        super(config);

        this.routeHandlers = new RoomsRoutesHandlers(this.routeConfig);
        this.intializeRoutes();
    }

    private intializeRoutes() {
        this.routesRegistry.registerRoutes(
            new GetRoute(this.pathWithId, this.routeHandlers.getRoom.bind(this.routeHandlers)),
        );
    }
};

export default RoomsRoutes;