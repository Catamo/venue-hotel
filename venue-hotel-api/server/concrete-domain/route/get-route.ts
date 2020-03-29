import IAppRoute from "@domain/route/iapproute";
import IAppRouter from "@domain/router/iapprouter";

class GetRoute implements IAppRoute {
    path: string;
    handler: (...args: any[]) => any;

    constructor(path: string, handler: (...args: any[]) => any) {
        this.path = path;
        this.handler = handler;
    }

    registerRoute(router: IAppRouter): void {
        router.get(this);
    }
}

export default GetRoute;