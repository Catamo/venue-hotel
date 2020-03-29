import IAppRouter from "../router/iapprouter";

interface IAppRoute {
    path: string;
    handler: (...args: any[]) => any;

    registerRoute(router: IAppRouter): void;
}

export default IAppRoute;