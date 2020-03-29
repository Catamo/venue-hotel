
import Middleware from '@domain/middleware/middleware';
import BookingsRoutesHandlers from './routes-handlers';
import { PostRoute, GetRoute, PutRoute } from '@server/concrete-domain/route';
import IHttpConfig from '@domain/http-methods/ihttp-config';

class BookingsRoutes extends Middleware {
    private path: string = '/bookings/';
    private pathWithId: string = '/bookings/:id';
    private routeHandlers: BookingsRoutesHandlers;

    constructor(config: IHttpConfig) {
        super(config);

        this.routeHandlers = new BookingsRoutesHandlers(this.routeConfig);
        this.intializeRoutes();
    }

    private intializeRoutes() {
        this.routesRegistry.registerRoutes(
            new PostRoute(this.path, this.routeHandlers.postBooking.bind(this.routeHandlers)),
            new GetRoute(this.path, this.routeHandlers.getAllBookings.bind(this.routeHandlers)),
            new GetRoute(this.pathWithId, this.routeHandlers.getBooking.bind(this.routeHandlers)),
            new PutRoute(this.pathWithId, this.routeHandlers.putBooking.bind(this.routeHandlers))
        );
    }
}

export default BookingsRoutes;