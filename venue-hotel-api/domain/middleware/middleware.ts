import RoutesRegistry from '../route/routes-registry';
import IHttpConfig from '../http-methods/ihttp-config';

class Middleware {
    protected routesRegistry: RoutesRegistry;
    protected routeConfig: IHttpConfig;

    constructor(config: IHttpConfig) {
        this.routesRegistry = RoutesRegistry.getInstance();
        this.routeConfig = config;
    }
}

export default Middleware;