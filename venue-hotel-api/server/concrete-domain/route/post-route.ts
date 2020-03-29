import IAppRoute from "@domain/route/iapproute";
import IAppRouter from "@domain/router/iapprouter";

class PostRoute implements IAppRoute {
    path: string;
    handler: (...args: any[]) => any;

    constructor(path: string, handler: (...args: any[]) => any) {
        this.path = path;
        this.handler = handler;
    }

    registerRoute(router: IAppRouter): void {
        router.post(this);
    }
}

export default PostRoute;