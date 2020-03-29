import Middleware from '@domain/middleware/middleware';
import HotelsRoutesHandlers from './routes-handlers';
import { PostRoute, GetRoute, DeleteRoute } from '@server/concrete-domain/route';
import IHttpConfig from '@domain/http-methods/ihttp-config';

class HotelsRoutes extends Middleware {
    private path: string = '/hotels/';
    private pathWithId: string = '/hotels/:id';
    private routeHandlers: HotelsRoutesHandlers;

    constructor(config: IHttpConfig) {
        super(config);

        this.routeHandlers = new HotelsRoutesHandlers(this.routeConfig);
        this.intializeRoutes();
    }

    private intializeRoutes() {
        this.routesRegistry.registerRoutes(
            new PostRoute(this.path, this.routeHandlers.postHotel.bind(this.routeHandlers)),
            new GetRoute(this.path, this.routeHandlers.getAllHotels.bind(this.routeHandlers)),
            new GetRoute(this.pathWithId, this.routeHandlers.getHotel.bind(this.routeHandlers)),
            new DeleteRoute(this.pathWithId, this.routeHandlers.deleteHotel.bind(this.routeHandlers))
        );
    }
};

export default HotelsRoutes;