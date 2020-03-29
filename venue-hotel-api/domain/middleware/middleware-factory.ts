import Middleware from "./middleware";
import GlobalHttpConfig from '@server/concrete-domain/http-methods/global-http-config';
import IHttpConfig from "@domain/http-methods/ihttp-config";

class MiddlewareFactory {
    public static Create<T extends Middleware>(ctor: new (config: IHttpConfig) => T): Middleware {
        return new ctor(GlobalHttpConfig.getInstance());
    }
}

export default MiddlewareFactory;