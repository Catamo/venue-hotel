import IAppRoute from "../route/iapproute";

interface IAppRouter {
    delete(route: IAppRoute): void;
    get(route: IAppRoute): void;
    post(route: IAppRoute): void;
    put(route: IAppRoute): void;
}

export default IAppRouter;