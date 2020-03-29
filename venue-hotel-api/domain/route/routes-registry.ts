import IAppRoute from './iapproute';

class RoutesRegistry {
    protected static instance: RoutesRegistry;
    protected routes: IAppRoute[];

    protected constructor() {
        this.routes = [];
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new RoutesRegistry();
        }

        return this.instance;
    }

    public registerRoutes(...args: IAppRoute[]) {
        this.routes = [...this.routes, ...args];
    }

    public forEachRoute(callback: (r: IAppRoute) => void) {
        for (const route of this.routes) {
            callback(route);
        }
    }
}

export default RoutesRegistry;